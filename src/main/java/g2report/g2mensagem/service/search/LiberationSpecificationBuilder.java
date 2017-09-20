package g2report.g2mensagem.service.search;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;

import g2report.bancr.service.search.SearchCriteria;
import g2report.g2mensagem.domain.Liberation;

public class LiberationSpecificationBuilder {

	private final List<SearchCriteria> params;
	
	public LiberationSpecificationBuilder() {
		params = new ArrayList<SearchCriteria>();
	}
	
	public LiberationSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}

	public Specification<Liberation> build() {
		if (params.size() == 0) {
			return null;
		}
		
		List<Specification<Liberation>> specs = new ArrayList<Specification<Liberation>>();
		for (SearchCriteria param : params) {
			specs.add(new LiberationSpecification(param));
		}
		
		Specification<Liberation> result = specs.get(0);
		for (int i = 1; i < specs.size(); i++) {
			result = Specifications.where(result).and(specs.get(i));
		}
		
		return result;
	}
}
