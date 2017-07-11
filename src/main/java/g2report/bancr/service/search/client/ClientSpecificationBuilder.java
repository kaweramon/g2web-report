package g2report.bancr.service.search.client;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.domain.Specifications;

import g2report.bancr.domain.Client;
import g2report.bancr.service.search.SearchCriteria;

public class ClientSpecificationBuilder {

	private final List<SearchCriteria> params;
	
	public ClientSpecificationBuilder() {
		params = new ArrayList<SearchCriteria>();
	}	
	
	public ClientSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}

	public Specification<Client> build() {
		if (params.size() == 0) {
			return null;
		}
		
		List<Specification<Client>> specs = new ArrayList<Specification<Client>>();
		for (SearchCriteria param : params) {
			specs.add(new ClientSpecification(param));
		}
		
		Specification<Client> result = specs.get(0);
		for (int i = 1; i < specs.size(); i++) {
			result = Specifications.where(result).and(specs.get(i));
		}
		
		return result;
	}
}
