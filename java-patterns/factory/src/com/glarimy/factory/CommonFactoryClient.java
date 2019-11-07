package com.glarimy.factory;

public class CommonFactoryClient {

	public static void main(String[] args) throws Exception {
		Component component = (Component) CommonFactory.get("component");
		component.service();
	}

}
