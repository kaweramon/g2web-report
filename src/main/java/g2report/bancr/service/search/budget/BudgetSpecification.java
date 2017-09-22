package g2report.bancr.service.search.budget;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.bancr.domain.Budget;
import g2report.bancr.service.search.SearchCriteria;

public class BudgetSpecification implements Specification<Budget> {

	private SearchCriteria criteria;
	
	public BudgetSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}
	
	public Predicate toPredicate(Root<Budget> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("budgetCounter") || criteria.getKey().equalsIgnoreCase("id")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}
			if (criteria.getKey().equalsIgnoreCase("obs")) {
				return builder.like(root.<String> get(criteria.getKey()), "%" + criteria.getValue() + "%");
			}
		} else if (criteria.getOperation().equalsIgnoreCase(">")) {
			if (criteria.getKey().equalsIgnoreCase("saleDate")) {
				Date dateConverted = null;
				try {
					dateConverted = convertStringToDate(criteria.getValue().toString(), "dd/MM/yyyy");
				} catch (ParseException e) {
					e.printStackTrace();
				}
				if (dateConverted != null) {
					return builder.greaterThanOrEqualTo(root.<Date> get(criteria.getKey()), dateConverted);
				}
			}
		} else if (criteria.getOperation().equalsIgnoreCase("<")) {
			if (criteria.getKey().equalsIgnoreCase("saleDate")) {
				Date dateConverted = null;
				try {
					dateConverted = convertStringToDate(criteria.getValue().toString(), "dd/MM/yyyy");
					return builder.lessThanOrEqualTo(root.<Date> get(criteria.getKey()), dateConverted);
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}

	private Date convertStringToDate(String strDate, String format) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		return formatter.parse(strDate);
	}
	
}
