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
import g2report.bancr.repository.BudgetRepository;
import g2report.bancr.service.search.budget.BudgetSpecificationBuilder;
import g2report.generic.EventException;

@Service
public class BudgetServiceImpl implements BudgetService {

	@Autowired
	private BudgetRepository repository;
	
	public Budget getById(Integer budgetId) throws EventException {

		Budget budget = repository.findOne(budgetId);
		
		if (budget == null) {
			throw new EventException("Orçamento não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return budget;
	}

	public List<Budget> search(String query) {
		Specification<Budget> spec = processSpecification(query);
		return repository.findAll(spec);
	}

	public void create(Budget budget) {

		budget.setSaleDate(new Date());
		budget.setHour(new Date());
		repository.save(budget);
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
	
}
