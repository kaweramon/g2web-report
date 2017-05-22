package g2report.service.search.quicksell;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;

import g2report.domain.QuickSell;
import g2report.service.search.SearchCriteria;

public class QuickSellSpecificationBuilder {

	private final List<SearchCriteria> params;
	
	public QuickSellSpecificationBuilder() {
		params = new ArrayList<SearchCriteria>();
	}	
	
	public QuickSellSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}

	public Specification<QuickSell> build() {
		if (params.size() == 0) {
			return null;
		}
		
		List<Specification<QuickSell>> specs = new ArrayList<Specification<QuickSell>>();
		for (SearchCriteria param : params) {
			specs.add(new QuickSellSpecification(param));
		}
		
		Specification<QuickSell> result = specs.get(0);
		for (int i = 1; i < specs.size(); i++) {
			result = Specifications.where(result).and(specs.get(i));
		}
		
		return result;
	}
	
}
