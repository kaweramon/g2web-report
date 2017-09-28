package g2report.bancr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.BudgetProducts;

@Repository
public interface BudgetProductsRepository extends CrudRepository<BudgetProducts, Integer> {

	public List<BudgetProducts> findByBudgetId(Integer budgetId);
	
	@Query(value = "SELECT * FROM produtos_orcamento_pedido p WHERE Cod_Orcamento_pedido = ?1", nativeQuery = true)
	public List<BudgetProducts> findAllByBudgetId(Integer budgetId);
	
	@Query(value = "DELETE FROM bancr.produtos_orcamento_pedido p WHERE Cod_Orcamento_pedido = ?1", nativeQuery = true)
	public void deleteByBudgetId(Integer budgetId);
}
