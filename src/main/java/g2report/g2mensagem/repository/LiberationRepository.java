package g2report.g2mensagem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.g2mensagem.domain.Liberation;

@Repository
public interface LiberationRepository extends CrudRepository<Liberation, Integer>, JpaSpecificationExecutor<Liberation> {

	public Liberation findOneByClientId(Integer clientId);
	
	@Query(value = "SELECT * FROM liberacao l", nativeQuery = true)
	public List<Liberation> getVersions();
}
