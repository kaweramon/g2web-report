package g2report.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	
	public Client() {}
	
	public Client(Integer id) {
		this.id = id;
	}
}
