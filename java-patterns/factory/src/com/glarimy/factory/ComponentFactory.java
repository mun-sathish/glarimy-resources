package com.glarimy.factory;

public class ComponentFactory {

	public static Component getComponent() {
		return new ConcreteComponent();
	}

}
