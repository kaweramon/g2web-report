package g2report.bancr.service.search.budget;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;

import g2report.bancr.domain.Budget;
import g2report.bancr.service.search.SearchCriteria;

public class BudgetSpecificationBuilder {

	private final List<SearchCriteria> params;
	
	public BudgetSpecificationBuilder() {
		params = new ArrayList<SearchCriteria>();
	}
	
	public BudgetSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}
	
	public Specification<Budget> build() {
		if (params.size() == 0) {
			return null;
		}
		
		List<Specification<Budget>> specs = new ArrayList<Specification<Budget>>();
		for (SearchCriteria param : params) {
			specs.add(new BudgetSpecification(param));
		}
		
		Specification<Budget> result = specs.get(0);
		for (int i = 1; i < specs.size(); i++) {
			result = Specifications.where(result).and(specs.get(i));
		}
		
		return result;
	}
	
}
