package g2report.bancr.domain.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity(name = "produto_outros")
@Data
public class ProductOthers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@OneToOne
	@JoinColumn(name = "Cod_Produto", insertable=false, updatable=false)
	private Product product;
	
	@Column(name = "Valor_Frete")
	private Double freightValue;

	@Column(name = "Valor_Seguro")
	private Double insuranceValue;
	
	@Column(name = "valor_Desconto")
	private Double discountValue;
	
}
