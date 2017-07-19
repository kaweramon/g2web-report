package g2report.g2mensagem.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import g2report.g2mensagem.domain.Liberation;
import g2report.g2mensagem.repository.LiberationRepository;
import g2report.g2mensagem.service.search.ClientLiberationSpecificationBuilder;

@Service
public class LiberationServiceImpl implements LiberationService {

	@Autowired
	private LiberationRepository repository;
	
	public List<Liberation> listReport() {
		List<Liberation> listLiberation = (List<Liberation>) repository.findAll();
		return listLiberation;
	}

	public List<Liberation> search(String search) {
		Specification<Liberation> spec = processSpecification(search);
		return repository.findAll(spec);
	}
	
	private Specification<Liberation> processSpecification(String search) {
		ClientLiberationSpecificationBuilder builder = new ClientLiberationSpecificationBuilder();
		
		String[] searchQuery = search.split(",");
		
		Pattern pattern = Pattern.compile("(\\w+?)(=|:|<|>)(\\w+?)");
		Matcher matcher = null;
		for (String param: searchQuery) {
			matcher = pattern.matcher(param);
			if (matcher.find()) {
				String[] params = param.split(matcher.group(2));
				builder.with(matcher.group(1), matcher.group(2), params[1]);
			}
		}
		
		return builder.build();
	}

	public Liberation update(Integer liberationId, Liberation liberation) {
		
		Liberation liberationDB = repository.findOne(liberationId);
		
		liberationDB.setClientSystemVersion(liberation.getClientSystemVersion());
		liberationDB.setObs(liberation.getObs());
		liberationDB.setSystemLiberationDate(liberation.getSystemLiberationDate());
		liberationDB.setVerificationDate(liberation.getVerificationDate());
		
		return repository.save(liberationDB);
	}
	
}
