package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.Budget;
import g2report.generic.EventException;

public interface BudgetService {

	public Budget getById(Integer budgetId) throws EventException;
	
	public List<Budget> search(String query);
	
	public void create(Budget budget);
	
	public Budget getLast();
}
