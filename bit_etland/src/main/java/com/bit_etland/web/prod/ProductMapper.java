package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;
@Repository
public interface ProductMapper {

	public void insertProduct(Product pro);
	public List<?> selectProductList(Proxy pxy);
	public List<Product> selectProducts(Map<?,?> m);
	public Product selectProduct(Product pro);
	
	public int countSrchProduct(String srch);
	
	public List<?> selectSrch(Proxy pxy);
	public int countProduct();
	public boolean existProduct(Product pro);
	
	public void updateProduct(Product pro);
	public void deleteProduct(Product pro);
}
