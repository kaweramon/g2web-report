package g2report.bancr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "configuracoes")
@Data
public class Configuration {

	@Id
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Habilita_G2_Interno")
	private Boolean isG2Intero;
}
