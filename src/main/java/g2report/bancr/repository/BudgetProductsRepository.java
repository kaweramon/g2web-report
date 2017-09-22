package g2report.bancr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.BudgetProducts;

@Repository
public interface BudgetProductsRepository extends CrudRepository<BudgetProducts, Integer> {

}
