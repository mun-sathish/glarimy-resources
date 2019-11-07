package com.glarimy;

public class ClientTwo {

	public static void main(String[] args) throws Exception {
		Component component = (Component) FactoryWithConventions.get("component");
		component.service();
	}

}
