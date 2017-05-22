package g2report.domain.dto;

import lombok.Data;

@Data
public class ClientDto {

	private Integer id;
	private String name;
	private String cpf;
	private String rg;
	private String cnpj;
	private String cel1;
	private String cel2;
	private String address;
	private Integer addressNumber;
	private String complement;
	private String neighborhood;
	private String city;
	private String uf;
	private String zipCode;
}
