package g2report.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.SightSale;

@Repository
public interface SightSaleRepository extends CrudRepository<SightSale, Integer>, JpaSpecificationExecutor<SightSale> {

}
