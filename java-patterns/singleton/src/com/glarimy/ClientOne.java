package com.glarimy;

public class ClientOne {

	public static void main(String[] args) throws Exception {
		Component component = ConcreteComponent.getInstance();
		component.service();
	}

}
