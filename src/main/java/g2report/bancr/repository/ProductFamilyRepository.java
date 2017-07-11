package g2report.bancr.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.product.ProductFamily;
import g2report.bancr.domain.product.ProductGroup;

@Repository
public interface ProductFamilyRepository extends CrudRepository<ProductFamily, Integer> {

	public List<ProductFamily> findAllByProductGroup(ProductGroup productGroup);
	
}
