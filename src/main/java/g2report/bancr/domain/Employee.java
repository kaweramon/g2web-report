package g2report.bancr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "cadastrofuncionario")
@Data
public class Employee {

	@Column(name = "COD_Aluno")
	@Id
	private Integer id;
	
	@Column(name = "Nome")
	private String name;
	
	@Column(name = "Login")
	private String login;
	
	@Column(name = "Senha")
	private String password;
}
