package g2report.bancr.service;

import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.Budget;
import g2report.bancr.repository.BudgetProductsRepository;
import g2report.bancr.repository.BudgetRepository;
import g2report.bancr.service.search.budget.BudgetSpecificationBuilder;
import g2report.generic.EventException;

@Service
public class BudgetServiceImpl implements BudgetService {

	@Autowired
	private BudgetRepository repository;
	
	@Autowired
	private BudgetProductsRepository budgetProductsRepository;
	
	public Budget getById(Integer budgetId) throws EventException {

		Budget budget = repository.findOne(budgetId);
		
		if (budget == null) {
			throw new EventException("Orçamento não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return budget;
	}

	public List<Budget> search(String query) throws EventException {
		Specification<Budget> spec = processSpecification(query);
		List<Budget> listBudget = repository.findAll(spec);
		if (listBudget == null || listBudget.size() == 0) {
			throw new EventException("Nenhum resultado encontrado", HttpStatus.NOT_FOUND);
		}
		for (Budget budget: listBudget) {
			budget.setListBudgetProducts(budgetProductsRepository.findAllByBudgetId(budget.getId()));
		}
		return listBudget;
	}

	public Budget create(Budget budget) {
		budget.setSaleDate(new Date());
		budget.setHour(new Date());
		if (budget.getIncreasePercent() == null) {
			budget.setIncreasePercent(0.0);
		}
		return repository.save(budget);
	}

	private Specification<Budget> processSpecification(String search) {
		BudgetSpecificationBuilder builder = new BudgetSpecificationBuilder();

		String[] searchQuery = search.split(",");
		
		Pattern pattern = Pattern.compile("(\\w+?)(=|:|<|>)(\\w+?)");
		Matcher matcher = null;
		for (String param: searchQuery) {
			matcher = pattern.matcher(param);
			if (matcher.find()) {
				String[] params = param.split(matcher.group(2));
				builder.with(matcher.group(1), matcher.group(2), params[1]);
			}
		}
		
		return builder.build();
	}

	public Budget getLast() {
		return repository.findFirstByOrderByIdDesc();
	}

	public void update(Budget budget, Integer budgetId) throws EventException {
		Budget budgetDB = repository.findOne(budgetId);
		
		handleBudgetErrors(budget, budgetDB);
		
		budgetDB.setSaleDate(new Date());
		budgetDB.setClientId(budget.getClientId());
		budgetDB.setClientName(budget.getClientName());
		budgetDB.setTotal(budget.getTotal());
		budgetDB.setSalesman(budget.getSalesman());
		budgetDB.setHour(new Date());
		budgetDB.setTotalWithDiscount(budget.getTotalWithDiscount());
		budgetDB.setObs(budget.getObs());
		budgetDB.setDelivered(budget.getDelivered());
		budgetDB.setMessage(budget.getMessage());
		budgetDB.setType(budget.getType());
		budgetDB.setClientName(budget.getClientName());
		budgetDB.setFreightValue(budget.getFreightValue());
		budgetDB.setInsuranceValue(budget.getInsuranceValue());
		budgetDB.setInfTreasury(budget.getInfTreasury());
		budgetDB.setAdditionalInf(budget.getAdditionalInf());
		budgetDB.setFreightModality(budget.getFreightModality());
		budgetDB.setIncreaseValue(budget.getIncreaseValue());
		budgetDB.setDiscountValue(budget.getDiscountValue());
		budgetDB.setDiscountPercent(budget.getDiscountPercent());
		budgetDB.setIncreasePercent(budget.getIncreasePercent());
		budgetDB.setOperatorId(budget.getOperatorId());
		budgetDB.setOperatorName(budget.getOperatorName());
		budgetDB.setBudgetCounter(budget.getBudgetCounter());
		budgetDB.setStatus(budget.getStatus());
		budgetDB.setValidity(budget.getValidity());
		budgetDB.setListBudgetProducts(budget.getListBudgetProducts());
		
		repository.save(budgetDB);
	}

	public void deleteBudget(Integer budgetId) throws EventException {
		if (repository.findOne(budgetId) == null) {
			throw new EventException("Orçamento não encontrado", HttpStatus.NOT_FOUND);
		}
		
		repository.delete(budgetId);
	}
	
	private void handleBudgetErrors(Budget budget, Budget budgetDB) throws EventException {
		
		if (budgetDB == null) {
			throw new EventException("Orçamento não encontrado", HttpStatus.NOT_FOUND);
		}
		
		if (budget.getClientId() == null || budget.getClientId() == 0) {
			throw new EventException("Cliente não encontrado", HttpStatus.BAD_REQUEST);
		}
		
		if (budget.getListBudgetProducts() == null || budget.getListBudgetProducts().size() == 0) {
			throw new EventException("Nenhum produto adicionado", HttpStatus.BAD_REQUEST);
		}
		
		if (budget.getSalesman() == null || budget.getSalesman().length() == 0) {
			throw new EventException("Vendedor não encontrado", HttpStatus.BAD_REQUEST);
		}
	}
	
}
