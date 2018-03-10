package g2report.bancr.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Client;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer>, JpaSpecificationExecutor<Client> {

	public Client findByCnpj(String cnpj);
	
}
