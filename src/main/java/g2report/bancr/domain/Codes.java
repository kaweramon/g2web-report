package g2report.bancr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "codigos")
@Data
public class Codes {

	@Column(name = "codigo")
	@Id()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "chave")
	private String key;
	
	@Column(name = "valor")
	private Integer value;
	
}
