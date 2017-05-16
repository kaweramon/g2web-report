package g2report.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import g2report.domain.product.Product;
import lombok.Data;

@Entity(name = "produtosvendarapida")
@Data
public class ProductQuickSell {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name="Cod_Venda_Rapida")
	private QuickSell quickSell;
	
	@OneToOne
	@JoinColumn(name="Cod_interno_prod", insertable=false, updatable=false)
	private Product product;
	
	@Column(name = "CFOP")
	private Double cfop;
	
	@Column(name = "quantidade")
	private Integer quantity;
	
	@Column(name = "subtotal")
	private Double subTotal;
	
	@Column(name = "Valor")
	private Double value;
	
	@Column(name = "Valor_Custo")
	private Double costValue;
	
	@Column(name = "Aliq_ICMS")
	private Double aliquotICMS;
	
	@Column(name = "CST_PIS")
	private String percentPIS;
	
	@Column(name = "CST_Cofins")
	private String percentCofins;
	
	@Column(name = "Desconto")
	private Double discount;
}
