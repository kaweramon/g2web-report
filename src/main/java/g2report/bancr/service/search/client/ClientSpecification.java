package g2report.bancr.service.search.client;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.bancr.domain.Client;
import g2report.bancr.service.search.SearchCriteria;

public class ClientSpecification implements Specification<Client> {

	private SearchCriteria criteria;
	
	public ClientSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}

	public Predicate toPredicate(Root<Client> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("fantasyName") || criteria.getKey().equalsIgnoreCase("name")) {
				return builder.like(root.<String> get(criteria.getKey()), "%" + criteria.getValue().toString().toUpperCase() + "%");
			}
			if (criteria.getKey().equalsIgnoreCase("category") || criteria.getKey().equalsIgnoreCase("situation") 
					|| criteria.getKey().equalsIgnoreCase("id")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}
		}
		
		return null;
	}
	
	
}
