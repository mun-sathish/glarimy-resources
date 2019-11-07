package com.glarimy;

public class ConcreteComponent implements Component {
	private String one;
	private String two;
	private String three;
	private static ComponentBuilder builder = new ComponentBuilder();
	
	private ConcreteComponent() {

	}

	public String getOne() {
		return one;
	}

	public void setOne(String one) {
		this.one = one;
	}

	public String getTwo() {
		return two;
	}

	public void setTwo(String two) {
		this.two = two;
	}

	public String getThree() {
		return three;
	}

	public void setThree(String three) {
		this.three = three;
	}

	@Override
	public void service() {
		System.out.println("Servicing with " + (one == null ? "" : one) + " " + (two == null ? "" : two) + " "
				+ (three == null ? "" : three));
	}

	public static ComponentBuilder builder() {
		return builder;
	}

	static class ComponentBuilder {
		private String one;
		private String two;
		private String three;

		public ComponentBuilder addPartOne(String one) {
			this.one = one;
			return this;
		}

		public ComponentBuilder addPartTwo(String two) {
			this.two = two;
			return this;
		}

		public ComponentBuilder addPartThree(String three) {
			this.three = three;
			return this;
		}

		public Component build() {
			ConcreteComponent component = new ConcreteComponent();
			component.setOne(one);
			component.setTwo(two);
			component.setThree(three);
			return component;
		}
	}

}
