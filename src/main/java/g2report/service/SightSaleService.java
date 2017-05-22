package g2report.service;

import java.util.List;

import g2report.domain.SightSale;

public interface SightSaleService {

	List<SightSale> searchSale(String search);
}
