package com.glarimy.factory;

public class ConcreteComponent implements Component {

	public ConcreteComponent() {
		System.out.println("Concrete Component: constructor");
	}

	@Override
	public void service() {
		System.out.println("Concrete Component: service");
	}

}
