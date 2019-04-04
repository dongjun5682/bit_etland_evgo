package com.bit_etland.web.supp;

import org.springframework.stereotype.Repository;

@Repository
public interface SupplierMapper {
	public String txSupplier(String supplierID);
}
