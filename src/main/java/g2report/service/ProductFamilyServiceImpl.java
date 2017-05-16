package g2report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.domain.product.ProductFamily;
import g2report.domain.product.ProductGroup;
import g2report.repository.ProductFamilyRepository;

@Service
public class ProductFamilyServiceImpl implements ProductFamilyService {

	@Autowired
	private ProductFamilyRepository repository;
	
	public List<ProductFamily> list(Integer productGroupId) {
		
		return (List<ProductFamily>) repository.findAllByProductGroup(new ProductGroup(productGroupId));
	}

}
