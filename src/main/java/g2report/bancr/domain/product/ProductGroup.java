package g2report.bancr.domain.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "grupos")
@Data
public class ProductGroup {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	private Integer id;
	
	@Column(name = "Nome_grupo")
	private String name;
	
	public ProductGroup() {}
	
	public ProductGroup(Integer id) {
		this.id = id;
	}
}
