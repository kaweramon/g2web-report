package g2report.bancr.service.search.sightsale;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import g2report.bancr.domain.Client;
import g2report.bancr.domain.ProductSightSale;
import g2report.bancr.domain.SightSale;
import g2report.bancr.domain.product.Product;
import g2report.bancr.domain.product.ProductFamily;
import g2report.bancr.domain.product.ProductGroup;
import g2report.bancr.service.search.SearchCriteria;

public class SightSaleSpecification implements Specification<SightSale> {

	private SearchCriteria criteria;
	
	public SightSaleSpecification(SearchCriteria criteria) {
		this.criteria = criteria;
	}
	
	public Predicate toPredicate(Root<SightSale> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
		query.distinct(true);
		if (criteria.getOperation().equalsIgnoreCase("=")) {
			if (criteria.getKey().equalsIgnoreCase("client")) {
				return builder.equal(root.get(criteria.getKey()), new Client((Integer.parseInt((String) criteria.getValue()))));
			}
			if (criteria.getKey().equalsIgnoreCase("product")) {
				Join<SightSale, ProductSightSale> joinSightSaleProducts = root.join("listProductSightSale");
				return builder.equal(joinSightSaleProducts.get("product"), Integer.parseInt(criteria.getValue().toString()));
			}
			if (criteria.getKey().equalsIgnoreCase("status") || criteria.getKey().equalsIgnoreCase("coo") 
					|| criteria.getKey().equalsIgnoreCase("id") || criteria.getKey().equalsIgnoreCase("cashier")) {
				return builder.equal(root.get(criteria.getKey()), criteria.getValue());
			}
			if(criteria.getKey().equalsIgnoreCase("group")) {
				Join<SightSale, ProductSightSale> joinSightSaleProducts = root.join("listProductSightSale");
				Join<ProductSightSale, Product> joinProdSightSale = joinSightSaleProducts.join("product");
				Join<Product, ProductGroup> joinProductGroup = joinProdSightSale.join("productGroup");
				return builder.equal(joinProductGroup.get("id"), Integer.parseInt(criteria.getValue().toString()));
			}
			if (criteria.getKey().equalsIgnoreCase("family")) {
				Join<SightSale, ProductSightSale> joinSightSaleProducts = root.join("listProductSightSale");
				Join<ProductSightSale, Product> joinProdSightSale = joinSightSaleProducts.join("product");
				Join<Product, ProductFamily> joinProductFamily = joinProdSightSale.join("productFamily");
				return builder.equal(joinProductFamily.get("id"), Integer.parseInt(criteria.getValue().toString()));
			}			
		} else if (criteria.getOperation().equalsIgnoreCase(">")) {
			if (criteria.getKey().equalsIgnoreCase("sellDate")) {
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
			if (criteria.getKey().equalsIgnoreCase("schedule")) {
				Date scheduleDateConverted = null;
				try {
					scheduleDateConverted = convertStringToDate(criteria.getValue().toString(), "HH:mm");
				} catch (ParseException e) {
					e.printStackTrace();
				}
				if (scheduleDateConverted != null) {
					return builder.greaterThanOrEqualTo(root.<Date> get(criteria.getKey()), scheduleDateConverted);
				}
			}
			return builder.greaterThanOrEqualTo(root.<String> get(criteria.getKey()), criteria.getValue().toString());
		} else if (criteria.getOperation().equalsIgnoreCase("<")) {
			if (criteria.getKey().equalsIgnoreCase("sellDate")) {
				Date dateConverted = null;
				try {
					dateConverted = convertStringToDate(criteria.getValue().toString(), "dd/MM/yyyy");
					return builder.lessThanOrEqualTo(root.<Date> get(criteria.getKey()), dateConverted);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				
			}
			if (criteria.getKey().equalsIgnoreCase("schedule")) {
				Date scheduleDateConverted = null;
				try {
					scheduleDateConverted = convertStringToDate(criteria.getValue().toString(), "HH:mm");
				} catch (ParseException e) {
					e.printStackTrace();
				}
				if (scheduleDateConverted != null) {
					return builder.lessThanOrEqualTo(root.<Date> get(criteria.getKey()), scheduleDateConverted);
				}
			}
			return builder.lessThanOrEqualTo(root.<String> get(criteria.getKey()), criteria.getValue().toString());
		}
		return null;
	}
	
	private Date convertStringToDate(String strDate, String format) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		return formatter.parse(strDate);
	}

}
