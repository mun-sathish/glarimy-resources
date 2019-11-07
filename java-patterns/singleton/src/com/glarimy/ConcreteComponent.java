package com.glarimy;

@Singleton(factoryMethod="getInstance")
public class ConcreteComponent implements Component {
	private static ConcreteComponent INSTANCE;

	private ConcreteComponent() {
		System.out.println("Concrete Component: constructor");
	}

	public static synchronized ConcreteComponent getInstance() {
		if (INSTANCE == null)
			INSTANCE = new ConcreteComponent();
		return INSTANCE;
	}

	@Override
	public void service() {
		System.out.println("Concrete Component: service");
	}

}
