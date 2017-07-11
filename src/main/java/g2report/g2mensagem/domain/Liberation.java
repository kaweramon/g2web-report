package g2report.g2mensagem.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "liberacao")
@Data
public class Liberation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;

	@Column(name = "versao_sys_cliente")
	private String clientSystemVersion;
	
	@Column(name = "Liberacao_sistema")
	private Date systemLiberationDate;
	
	@Column(name = "data_verificacao")
	private Date verificationDate;
	
	@Column(name = "Obs")
	private String obs;
	
	@Column(name = "ID_Cliente")
	private Integer clientId;
	
}
