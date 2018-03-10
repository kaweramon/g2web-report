package g2report.g2mensagem.service;

import java.util.List;

import g2report.g2mensagem.domain.Liberation;
import g2report.generic.BadRequestException;

public interface LiberationService {

	public List<Liberation> listReport();

	public List<Liberation> search(String search);
	
	public Liberation update(Integer liberationId, Liberation liberation);
	
	public List<String> getVersions();
	
	public Liberation findByClientCnpj(String cnpj) throws BadRequestException;
	
}
