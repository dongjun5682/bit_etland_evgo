package com.bit_etland.web.cmm;

import org.springframework.stereotype.Service;


@FunctionalInterface
@Service
public interface FuncService {
	public abstract void execute(Object o);
}
