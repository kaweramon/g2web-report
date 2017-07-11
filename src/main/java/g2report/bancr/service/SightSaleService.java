package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.SightSale;

public interface SightSaleService {

	List<SightSale> searchSale(String search);
}
