package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.product.Product;
import g2report.generic.EventException;

public interface ProductService {

	public List<Product> list();
	
	public List<Product> search(String query) throws EventException;
}
