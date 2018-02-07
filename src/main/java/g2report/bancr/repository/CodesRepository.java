package g2report.bancr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Codes;

@Repository
public interface CodesRepository extends CrudRepository<Codes, Integer> {

	public Codes findByKey(String key);
	
}
