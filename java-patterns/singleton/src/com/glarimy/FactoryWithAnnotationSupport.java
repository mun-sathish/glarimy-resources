package com.glarimy;

import java.io.FileReader;
import java.util.Properties;

public class FactoryWithAnnotationSupport {

	@SuppressWarnings("unchecked")
	public static Object get(String key) throws Exception {
		Properties props = new Properties();
		props.load(new FileReader("conf.properties"));
		@SuppressWarnings("rawtypes")
		Class claz = Class.forName(props.getProperty(key));
		try {
			return claz.newInstance();
		} catch (IllegalAccessException e) {
			Singleton singleton = (Singleton) claz.getAnnotation(Singleton.class);
			String name = singleton.factoryMethod();
			return claz.getMethod(name).invoke(claz);
		}
	}
}
