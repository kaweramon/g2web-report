package g2report.bancr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.product.ProductGroup;
import g2report.bancr.repository.ProductGroupRepository;

@Service
public class ProductGroupServiceImpl implements ProductGroupService {

	@Autowired
	private ProductGroupRepository repository;
	
	public List<ProductGroup> list() {
		return (List<ProductGroup>) repository.findAll();
	}

}
