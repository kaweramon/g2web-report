package g2report.domain.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity(name = "cad_familia_produto")
@Data
public class ProductFamily {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Nome_Familia")
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "Cod_Grupo")
	private ProductGroup productGroup;
	
}
