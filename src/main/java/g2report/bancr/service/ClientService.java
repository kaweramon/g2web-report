package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.Client;

public interface ClientService {

	public List<Client> list();
	
	public List<Client> search(String search);
}
