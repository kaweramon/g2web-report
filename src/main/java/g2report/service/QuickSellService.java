package g2report.service;

import java.util.Date;
import java.util.List;

import g2report.domain.QuickSell;

public interface QuickSellService {

	public List<QuickSell> listQuickSellReport(Date dateFrom, Date dateTo);
	
	public List<QuickSell> search(String search);
}
