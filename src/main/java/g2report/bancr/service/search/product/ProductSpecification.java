package g2report.bancr.service.search.product;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.bancr.domain.product.Product;
import g2report.bancr.service.search.SearchCriteria;

public class ProductSpecification implements Specification<Product> {

	private SearchCriteria criteria;
	
	public ProductSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}
	
	public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("id") || criteria.getKey().equalsIgnoreCase("barCode") || 
					criteria.getKey().equalsIgnoreCase("priceValue")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}
			if (criteria.getKey().equalsIgnoreCase("name") || criteria.getKey().equalsIgnoreCase("reference")) {
				return builder.like(root.<String> get(criteria.getKey()), "%" + criteria.getValue() + "%");
			}
		}
		
		return null;
	}
	
}
