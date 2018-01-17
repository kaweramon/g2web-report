package g2report.bancr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "produtos_orcamento_pedido")
@Data
public class BudgetProducts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Cod_Orcamento_pedido")
	private Integer budgetId;
	
	@Column(name = "Cod_Produto")
	private Integer productId;
	
	@Column(name = "Nome_Produto")
	private String productName;
	
	@Column(name = "quantidade")
	private Integer quantity;
	
	@Column(name = "Valor")
	private Double priceValue;
	
	@Column(name = "subtotal")
	private Double subTotal;
	
	@Column(name = "Valor_Custo")
	private Double costValue;
	
	@Column(name = "valor_Desconto")
	private Double discountValue;
	
	@Column(name = "Percent_Desconto")
	private Double discountPercent;
	
	@Column(name = "Valor_Acrescimo")
	private Double increaseValue;
	
	@Column(name = "Percent_Acrescimo")
	private Double increasePercent;
	
	@Column(name = "CFOP")
	private Integer cfop;
	
	@Column(name = "CST")
	private String cst;
	
	@Column(name = "NCM")
	private String ncm;
	
	@Column(name = "Unidade_Prod")
	private String unity;
	
	@Column(name = "Codigo_Produto")
	private String barCodeProduct;
}
