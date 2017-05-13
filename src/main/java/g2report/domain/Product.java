package g2report.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity(name = "produto")
public class Product {

	@Id
	@Column(name = "COD_Produto")
	private Integer id;
	
	@Column(name = "Discriminacao")
	private String name;
	
	@Column(name = "Codigo_Produto")
	private String barCode;
	
	@Column(name = "Tipo")
	private String type;
	
	public Product(){}
	
	public Product(Integer id) {}
}
