package g2report.bancr.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.product.Product;
import g2report.bancr.repository.ProductRepository;
import g2report.bancr.service.search.product.ProductSpecificationBuilder;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;
	
	public List<Product> list() {
		return (List<Product>) repository.findAll();
	}

	public List<Product> search(String query) {
		Specification<Product> specs = processSpecification(query);
		return repository.findAll(specs);
	}

	private Specification<Product> processSpecification(String search) {
		ProductSpecificationBuilder builder = new ProductSpecificationBuilder();

		String[] searchQuery = search.split(",");
		
		Pattern pattern = Pattern.compile("(\\w+?)(=|:|<|>)(\\w+?)");
		Matcher matcher = null;
		for (String param: searchQuery) {
			matcher = pattern.matcher(param);
			if (matcher.find()) {
				String[] params = param.split(matcher.group(2));
				builder.with(matcher.group(1), matcher.group(2), params[1]);
			}
		}
		return builder.build();
	}
	
}
