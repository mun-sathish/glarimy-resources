package com.glarimy;

public class ClientThree {

	public static void main(String[] args) throws Exception {
		Component component = (Component) FactoryWithAnnotationSupport.get("component");
		component.service();

	}

}
