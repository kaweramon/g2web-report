package g2report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.domain.product.Product;
import g2report.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;
	
	public List<Product> list() {
		return (List<Product>) repository.findAll();
	}

}
