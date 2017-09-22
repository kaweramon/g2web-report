package g2report.bancr.domain.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.Client;
import g2report.g2mensagem.domain.dto.LiberationDto;
import lombok.Data;

@Data
public class ClientDto {

	private Integer id;
	private String name;
	private String fantasyName;
	private String cpf;
	private String rg;
	private String cnpj;
	private String cel1;
	private String cel2;
	private String category;
	private String situation;
	private String address;
	private Integer addressNumber;
	private String complement;
	private String neighborhood;
	private String city;
	private String uf;
	private String zipCode;
	private String stateRegistration;
	private LiberationDto liberation;
	
	public static ClientDto fromObject(Client client) {
		ClientDto clientDto = new ClientDto();
		BeanUtils.copyProperties(client, clientDto);
		if (client.getLiberation() != null) {
			clientDto.setLiberation(LiberationDto.fromObject(client.getLiberation()));
		}
		return clientDto;
	}
	
	public static List<ClientDto> fromObject(List<Client> clients) {
		List<ClientDto> clientsDto = new ArrayList<ClientDto>();
		for (Client client : clients) {
			clientsDto.add(ClientDto.fromObject(client));
		}		
		return clientsDto;
	}
	
	public Client toObject() {
		Client client = new Client();
		BeanUtils.copyProperties(this, client);
		return client;
	}
	
}
