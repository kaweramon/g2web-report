package g2report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.domain.product.ProductGroup;
import g2report.repository.ProductGroupRepository;

@Service
public class ProductGroupServiceImpl implements ProductGroupService {

	@Autowired
	private ProductGroupRepository repository;
	
	public List<ProductGroup> list() {
		return (List<ProductGroup>) repository.findAll();
	}

}
