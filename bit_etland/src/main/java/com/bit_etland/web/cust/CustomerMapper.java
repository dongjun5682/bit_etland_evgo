package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;



@Repository
public interface CustomerMapper {
	
	public void insertCustomer(Customer cus);
	public List<?> selectCustomerList(Proxy pxy);
	public List<Customer> selectCustomers(Map<?,?> m);
	public Customer selectCustomer(Customer cus);
	public int countCustomers();
	public void updateCustomer(Customer cus);
	public Map<String,Object> selectProfile(Map<?,?> m);
	public void deleteCustomer(Customer cus);
	public Map<String, Object> selectPhone(Map<?,?> m);

}
