package g2report.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.product.ProductFamily;
import g2report.domain.product.ProductGroup;

@Repository
public interface ProductFamilyRepository extends CrudRepository<ProductFamily, Integer> {

	public List<ProductFamily> findAllByProductGroup(ProductGroup productGroup);
	
}
