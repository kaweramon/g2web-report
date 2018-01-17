package g2report.bancr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Configuration;

@Repository
public interface ConfigurationRepository extends CrudRepository<Configuration, Integer> {
	
}
