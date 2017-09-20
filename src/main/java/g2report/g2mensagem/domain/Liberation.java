package g2report.g2mensagem.domain;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import g2report.bancr.domain.Client;
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
//	@Temporal(TemporalType.DATE)
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/Recife")
	private Date systemLiberationDate;
	
	@Column(name = "data_verificacao")
//	@Temporal(TemporalType.TIMESTAMP)
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/Recife")
	private Date verificationDate;
	
	@Column(name = "Obs")
	private String obs;
	
	@Column(name = "ID_Cliente")
	private Integer clientId;
	
/*	@OneToOne(targetEntity = Client.class)
	@JoinColumn(name = "ID_Cliente")
	private Client client;*/
}
