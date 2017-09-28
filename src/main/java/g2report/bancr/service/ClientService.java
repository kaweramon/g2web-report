package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.Client;
import g2report.generic.EventException;

public interface ClientService {

	public List<Client> list();
	
	public List<Client> search(String search, Boolean isLiberation) throws EventException;
}
