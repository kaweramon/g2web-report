package g2report.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.product.ProductGroup;

@Repository
public interface ProductGroupRepository extends CrudRepository<ProductGroup, Integer> {

}
