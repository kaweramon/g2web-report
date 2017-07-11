package g2report.bancr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import g2report.g2mensagem.domain.Liberation;
import lombok.Data;

@Entity(name = "cadastro")
@Data
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COD_Aluno")
	private Integer id;
	
	@Column(name = "Nome")
	private String name;
	
	@Column(name = "Nome_Fantasia")
	private String fantasyName;
	
	@Column(name = "CPF")
	private String cpf;
	
	@Column(name = "RG")
	private String rg;
	
	@Column(name = "CNPJ")
	private String cnpj;
	
	@Column(name = "Telefone")
	private String cel1;
	
	@Column(name = "Telefone2")
	private String cel2;
	
	@Column(name = "Categoria")
	private String category;
	
	@Column(name = "Endereco")
	private String address;
	
	@Column(name = "Num")
	private Integer addressNumber;
	
	@Column(name = "complemento")
	private String complement;
	
	@Column(name = "Bairro")
	private String neighborhood;

	@Column(name = "Cidade")
	private String city;
	
	@Column(name = "UF")
	private String uf;
	
	@Column(name = "CEP")
	private String zipCode;
	
	@Column(name = "Situacao")
	private String situation;
	
	@Transient
	private Liberation liberation;
	
	public Client() {}
	
	public Client(Integer id) {
		this.id = id;
	}
}
