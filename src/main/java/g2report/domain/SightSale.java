package g2report.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity(name = "vendaavista")
@Data
public class SightSale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	private Integer id;
	
	@Column(name = "Dt_Venda", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date sellDate;
	
	@OneToOne
	@JoinColumn(name = "COD_Cliente", insertable = false, updatable = false)
	private Client client;
	
	@Column(name = "Total")
	private Double total;
	
	@Column(name = "Total_com_desconto")
	private Double totalDiscount;
	
	@Column(name = "Caixa")
	private Integer cashier;
	
	@Column(name = "Vendedor")
	private String salesMan;
	
	@Column(name = "Horario")
	@Temporal(TemporalType.TIME)
	private Date schedule;
	
	@Column(name = "COO")
	private String coo;
	
	@Column(name = "Status")
	private String status;
	
	@OneToMany(mappedBy = "sightSale")
	private List<ProductSightSale> listProductSightSale;
}
