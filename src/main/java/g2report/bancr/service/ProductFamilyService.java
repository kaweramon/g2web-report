package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.product.ProductFamily;

public interface ProductFamilyService {

	List<ProductFamily> list(Integer productGroupId);
}
