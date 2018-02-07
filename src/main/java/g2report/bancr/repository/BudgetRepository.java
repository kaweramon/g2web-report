package g2report.bancr.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Budget;

@Repository
public interface BudgetRepository extends CrudRepository<Budget, Integer>, JpaSpecificationExecutor<Budget> {
	
	public Budget findFirstByOrderByIdDesc();
	
	public List<Budget> findBySaleDateBetween(Date dateFrom, Date dateTo);
	
	@Query(value = "SELECT IFNULL(MAX(Num_Orc), 1) as Num_Orc FROM orcamento_pedido p;", nativeQuery = true)
	public Integer findLastNumOrc();
	
	@Query(value = "SELECT MAX(Codigo) FROM orcamento_pedido p;", nativeQuery = true)
	public Integer findLastId();
	
}
