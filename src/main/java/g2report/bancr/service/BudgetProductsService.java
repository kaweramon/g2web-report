package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.BudgetProducts;

public interface BudgetProductsService {

	public void create(List<BudgetProducts> listBudgetProducts);
	
	public void update(List<BudgetProducts> listBudgetProducts, Integer budgetId);
	
	public void deleteBudgetProducts(Integer budgetId);
}
