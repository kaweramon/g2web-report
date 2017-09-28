package g2report.bancr.domain.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.BudgetProducts;
import lombok.Data;

@Data
public class BudgetProductsDto {

	private Integer id;
	private Integer budgetId;
	private Integer productId;
	private String productName;
	private Integer quantity;
	private Double priceValue;
	private Double subTotal;
	private Double costValue;
	private Integer cfop;
	private String cst;
	private String ncm;
	private String barCodeProduct;
	
	public static BudgetProductsDto fromObject(BudgetProducts budgetProducts) {
		BudgetProductsDto budgetProductsDto = new BudgetProductsDto();
		BeanUtils.copyProperties(budgetProducts, budgetProductsDto);
		return budgetProductsDto;
	}
	
	public static List<BudgetProductsDto> fromObject(List<BudgetProducts> listBudgetProducts) {
		List<BudgetProductsDto> listBudgetProductsDto = new ArrayList<BudgetProductsDto>();
		for (BudgetProducts budgetProducts : listBudgetProducts) {
			listBudgetProductsDto.add(fromObject(budgetProducts));
		}
		return listBudgetProductsDto;
	}
	
	public BudgetProducts toObject() {
		BudgetProducts budgetProducts = new BudgetProducts();
		BeanUtils.copyProperties(this, budgetProducts);
		return budgetProducts;
	}
	
	public static List<BudgetProducts> toObject(List<BudgetProductsDto> listBudgetProductsDto) {
		List<BudgetProducts> listBudgetProducts = new ArrayList<BudgetProducts>();
		for (BudgetProductsDto budgetProductsDto : listBudgetProductsDto) {
			listBudgetProducts.add(budgetProductsDto.toObject());
		}
		return listBudgetProducts;
	}
}
