package com.glarimy;

public class ComponentClient {

	public static void main(String[] args) {
		Component component = ConcreteComponent.builder().addPartTwo("Second").addPartOne("First")
				.build();
		component.service();
	
	}

}
