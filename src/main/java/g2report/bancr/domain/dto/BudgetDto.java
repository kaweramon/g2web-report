package g2report.bancr.domain.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.Budget;
import lombok.Data;

@Data
public class BudgetDto {

	private Integer id;
	private Date saleDate;
	private Integer clientId;
	private Double total;
	private String salesman;
	private Date hour;
	private Double totalWithDiscount;
	private String obs;
	private String delivered;
	private String message;
	private String type;
	private String clientName;
	private Double freightValue;
	private Double insuranceValue;
	private String infTreasury;
	private String additionalInf;
	private String freightModality;
	private Double discountValue;
	private Double increaseValue;
	private Double discountPercent;
	private Double increasePercent;
	private Integer operatorId;
	private String operatorName;
	private Integer budgetCounter;
	private String status;
	private Date validity;
	private List<BudgetProductsDto> listBudgetProducts;
	
	public static BudgetDto fromObject(Budget budget) {
		BudgetDto budgetDto = new BudgetDto();
		BeanUtils.copyProperties(budget, budgetDto);
		if (budget.getListBudgetProducts() != null) {
			budgetDto.setListBudgetProducts(BudgetProductsDto.fromObject(budget.getListBudgetProducts()));
		}
		return budgetDto;
	}
	
	public static List<BudgetDto> fromObject(List<Budget> listBudgets) {
		List<BudgetDto> listBudgetDto = new ArrayList<BudgetDto>();
		for (Budget budget : listBudgets) {
			listBudgetDto.add(fromObject(budget));
		}
		return listBudgetDto;
	}
	
	public Budget toObject() {
		Budget budget = new Budget();
		BeanUtils.copyProperties(this, budget);
		return budget;
	}
}
