package g2report.bancr.service.search.sightsale;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;

import g2report.bancr.domain.SightSale;
import g2report.bancr.service.search.SearchCriteria;

public class SightSaleSpecificationBuilder {

	private final List<SearchCriteria> params;
	
	public SightSaleSpecificationBuilder() {
		params = new ArrayList<SearchCriteria>();
	}
	
	public SightSaleSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}
	
	public Specification<SightSale> build() {
		if (params.size() == 0) {
			return null;
		}
		
		List<Specification<SightSale>> specs = new ArrayList<Specification<SightSale>>();
		for (SearchCriteria param : params) {
			specs.add(new SightSaleSpecification(param));
		}
		
		Specification<SightSale> result = specs.get(0);
		for (int i = 1; i < specs.size(); i++) {
			result = Specifications.where(result).and(specs.get(i));
		}
		
		return result;
	}
}
