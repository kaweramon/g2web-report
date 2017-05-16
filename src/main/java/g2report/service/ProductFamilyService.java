package g2report.service;

import java.util.List;

import g2report.domain.product.ProductFamily;

public interface ProductFamilyService {

	List<ProductFamily> list(Integer productGroupId);
}
