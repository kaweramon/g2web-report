package g2report.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.domain.Client;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer> {

}
