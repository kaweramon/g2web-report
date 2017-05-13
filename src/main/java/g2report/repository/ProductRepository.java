package g2report.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer>{

}
