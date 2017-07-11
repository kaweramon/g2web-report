package g2report.bancr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.product.ProductGroup;

@Repository
public interface ProductGroupRepository extends CrudRepository<ProductGroup, Integer> {

}
