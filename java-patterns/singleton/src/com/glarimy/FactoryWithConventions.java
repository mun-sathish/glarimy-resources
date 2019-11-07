package com.glarimy;

import java.io.FileReader;
import java.lang.reflect.Method;
import java.util.Properties;

public class FactoryWithConventions {

	@SuppressWarnings("unchecked")
	public static Object get(String key) throws Exception {
		Properties props = new Properties();
		props.load(new FileReader("conf.properties"));
		@SuppressWarnings("rawtypes")
		Class claz = Class.forName(props.getProperty(key));
		try {
			return claz.newInstance();
		} catch (IllegalAccessException e) {
			Method method = claz.getMethod("getInstance");
			return method.invoke(claz);
		}
	}

}
