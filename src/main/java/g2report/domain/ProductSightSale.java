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

@Entity(name = "produtosvendavista")
@Data
public class ProductSightSale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "Cod_Venda_Vista")
	private SightSale sightSale;
	
	@OneToOne
	@JoinColumn(name="Cod_Produto", insertable=false, updatable=false)
	private Product product;
	
	@Column(name = "quantidade")
	private Integer quantity;
	
	@Column(name = "Valor")
	private Double value;
	
	@Column(name = "subtotal")
	private Double subTotal;
	
	@Column(name = "Valor_Custo")
	private Double costValue;
	
	@Column(name = "CFOP")
	private Integer cfop;
	
	@Column(name = "CST")
	private Integer cst;
	
	@Column(name = "NCM")
	private String ncm;
	
	@Column(name = "aliquota_ICMS")
	private Double aliquotICMS;
}
