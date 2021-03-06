package g2report.bancr.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity(name = "orcamento_pedido")
@Data
public class Budget {

	@Id
	@Column(name = "codigo")
	private Integer id;
	
	@Temporal(TemporalType.DATE)
	@JsonFormat(locale = "pt-BR", timezone = "America/Sao_Paulo", pattern = "yyyy-MM-dd HH:mm:ss")
	@Column(name = "Dt_Venda")
	private Date saleDate;
	
	@Column(name = "COD_Cliente")
	private Integer clientId;
	
	@Column(name = "Total")
	private Double total;
	
	@Column(name = "Vendedor")
	private String salesman;
	
	@Column(name = "Horario")
	@JsonFormat(locale = "pt-BR", timezone = "America/Sao_Paulo", pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date hour;
	
	@Column(name = "Total_com_desconto")
	private Double totalWithDiscount;
	
	@Column(name = "Obs")
	private String obs;
	
	@Column(name = "Entregue")
	private String delivered;
	
	@Column(name = "Mensagem")
	private String message;
	
	@Column(name = "Tipo")
	private String type;
	
	@Column(name = "NomeCliente")
	private String clientName;
	
	@Column(name = "Valor_Frete")
	private Double freightValue;
	
	@Column(name = "Valor_Seguro")
	private Double insuranceValue;
	
	@Column(name = "Inf_Adicionais_Fisco")
	private String infTreasury;
	
	@Column(name = "Inf_Complementares")
	private String additionalInf;
	
	@Column(name = "Modalidade_Frete")
	private String freightModality;
	
	@Column(name = "Valor_Desconto")
	private Double discountValue;
	
	@Column(name = "Valor_Acrescimo")
	private Double increaseValue;
	
	@Column(name = "Percent_Desconto")
	private Double discountPercent;
	
	@Column(name = "Percent_Acrescimo")
	private Double increasePercent;
	
	@Column(name = "CodigoOperador")
	private Integer operatorId;
	
	@Column(name = "NomeOperador")
	private String operatorName;
	
	@Column(name = "Num_Orc")
	private Integer budgetCounter;
	
	@Column(name = "Status")
	private String status;
	
	@Column(name = "Validade")
	@Temporal(TemporalType.DATE)
	@JsonFormat(locale = "pt-BR", timezone = "America/Sao_Paulo", pattern = "yyyy-MM-dd")
	private Date validity;
	
	@Transient
	private List<BudgetProducts> listBudgetProducts;
}
