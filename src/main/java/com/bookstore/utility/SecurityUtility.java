package com.bookstore.utility;

import org.springframework.stereotype.Component;

@Component
public interface SecurityUtility {
	public static final String SALT = "salt"; // salt should be protected carefully
}
