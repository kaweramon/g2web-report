package g2report.g2mensagem.service.search;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.bancr.domain.Client;
import g2report.bancr.service.search.SearchCriteria;
import g2report.g2mensagem.domain.Liberation;

public class ClientLiberationSpecification implements Specification<Liberation> {

	private SearchCriteria criteria;
	
	public ClientLiberationSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}
	
	public Predicate toPredicate(Root<Liberation> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("clientSystemVersion")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}			
			if (criteria.getKey().equalsIgnoreCase("category") || criteria.getKey().equalsIgnoreCase("status")
				|| criteria.getKey().equalsIgnoreCase("socialReason") || criteria.getKey().equalsIgnoreCase("fantasyName")) {				
				
				Join<Liberation, Client> joinLiberationClient = root.join("client");
				
				return builder.equal(joinLiberationClient.get(criteria.getKey()), criteria.getValue());
			}
		}
		
		return null;
	}

}
