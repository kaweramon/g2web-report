package g2report.bancr.service;

import java.util.Date;
import java.util.List;

import g2report.bancr.domain.QuickSell;

public interface QuickSellService {

	public List<QuickSell> listQuickSellReport(Date dateFrom, Date dateTo);
	
	public List<QuickSell> search(String search);
}
