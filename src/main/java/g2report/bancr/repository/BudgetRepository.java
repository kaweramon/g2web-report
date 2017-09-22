package g2report.bancr.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Budget;

@Repository
public interface BudgetRepository extends CrudRepository<Budget, Integer>, JpaSpecificationExecutor<Budget> {
	
	public Budget findFirstByOrderByIdDesc();
	
}
