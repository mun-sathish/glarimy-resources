package com.glarimy.factory;

import java.io.FileReader;
import java.util.Properties;

public class CommonFactory {

	public static Object get(String key) throws Exception {
		Properties props = new Properties();
		props.load(new FileReader("conf.properties"));
		return Class.forName(props.getProperty(key)).newInstance();
	}

}
