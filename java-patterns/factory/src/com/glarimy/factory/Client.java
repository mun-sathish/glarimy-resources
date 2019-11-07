package com.glarimy.factory;

public class Client {

	public static void main(String[] args) {
		Component component = ComponentFactory.getComponent();
		component.service();
	}
}
