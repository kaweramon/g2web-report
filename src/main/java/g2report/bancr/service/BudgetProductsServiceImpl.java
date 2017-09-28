package g2report.bancr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.BudgetProducts;
import g2report.bancr.repository.BudgetProductsRepository;

@Service
public class BudgetProductsServiceImpl implements BudgetProductsService {

	@Autowired
	private BudgetProductsRepository repository;

	public void create(List<BudgetProducts> listBudgetProducts) {
		repository.save(listBudgetProducts);
	}

	public void deleteBudgetProducts(Integer budgetId) {
		List<BudgetProducts> listBudgetProducts = repository.findByBudgetId(budgetId);
		repository.delete(listBudgetProducts);
	}
	
}
