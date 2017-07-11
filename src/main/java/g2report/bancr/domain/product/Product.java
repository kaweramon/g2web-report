package g2report.bancr.domain.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity(name = "produto")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COD_Produto")
	private Integer id;
	
	@Column(name = "Discriminacao")
	private String name;
	
	@Column(name = "Codigo_Produto")
	private String barCode;
	
	@Column(name = "Tipo")
	private String type;
	
	@Column(name = "preco_custo")
	private Double costPrice;
	
	@ManyToOne
	@JoinColumn(name = "Cod_Grupo")
	private ProductGroup productGroup;
	
	@ManyToOne
	@JoinColumn(name = "Cod_Familia")
	private ProductFamily productFamily;
	
	@OneToOne(mappedBy = "product")
	private ProductOthers productOther;
	
	public Product(){}
	
	public Product(Integer id) {}
}
