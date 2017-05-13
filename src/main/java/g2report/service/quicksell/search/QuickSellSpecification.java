package g2report.service.quicksell.search;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.domain.Client;
import g2report.domain.QuickSell;

public class QuickSellSpecification implements Specification<QuickSell> {

	private SearchCriteria criteria;
	
	public QuickSellSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}
	
	public Predicate toPredicate(Root<QuickSell> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("client")) {
				return builder.equal(root.get(criteria.getKey()), new Client((Integer.parseInt((String) criteria.getValue()))));
			}
			if (criteria.getKey().equalsIgnoreCase("transaction")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}
		} else if (criteria.getOperation().equalsIgnoreCase(">")) {
			if (criteria.getKey().equalsIgnoreCase("sellDate")) {
				Date dateConverted = null;
				try {
					dateConverted = convertStringToDate(criteria.getValue().toString());
				} catch (ParseException e) {
					e.printStackTrace();
				}
				if (dateConverted != null) {
					return builder.greaterThanOrEqualTo(root.<Date> get(criteria.getKey()), dateConverted);
				}				
			}
			return builder.greaterThanOrEqualTo(root.<String> get(criteria.getKey()), criteria.getValue().toString());
		} else if (criteria.getOperation().equalsIgnoreCase("<")) {
			if (criteria.getKey().equalsIgnoreCase("sellDate")) {
				Date dateConverted = null;
				try {
					dateConverted = convertStringToDate(criteria.getValue().toString());
					return builder.lessThanOrEqualTo(root.<Date> get(criteria.getKey()), dateConverted);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				
			}
			return builder.lessThanOrEqualTo(root.<String> get(criteria.getKey()), criteria.getValue().toString());
		}
		return null;
	}

	private Date convertStringToDate(String strDate) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.parse(strDate);
	}
}
