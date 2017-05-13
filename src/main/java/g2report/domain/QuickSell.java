package g2report.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity(name = "vendarapida")
public class QuickSell {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	private Integer id;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "Dt_venda")
	private Date sellDate;
	
	@Column(name = "Total")
	private Double total;
	
	@Column(name = "Horario")
	@Temporal(TemporalType.TIME)
	private Date schedule;
	
	@Column(name = "Total_com_desconto")
	private Double totalWithDescount;
	
	@Column(name = "Tipo")
	private String type;
	
	@Column(name = "Cod_Cliente")
	private Integer clientId;
	
	@OneToOne()
	@JoinColumn(name = "Cod_Cliente", insertable = false, updatable = false)
	private Client client;
	
	@Column(name = "Vendedor")
	private String salesman;
	
	@Column(name = "Caixa")
	private Integer cashier;
	
	@Column(name = "Transacao")
	private String transaction;
	
	@Column(name = "Valor_Acrescimo")
	private Double additionValue;
	
	@Column(name = "Valor_Desconto")
	private Double discountValue;
	
	@Column(name = "NFCe_Chave")
	private String nfeKey;
}
