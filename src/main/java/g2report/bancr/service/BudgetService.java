package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.Budget;
import g2report.generic.EventException;

public interface BudgetService {

	public Budget getById(Integer budgetId) throws EventException;
	
	public List<Budget> search(String query) throws EventException;
	
	public Budget create(Budget budget);
	
	public void update(Budget budget, Integer budgetId) throws EventException; 
	
	public Budget getLast();
	
	public void deleteBudget(Integer budgetId) throws EventException;
}
