package fw.core;

import java.lang.reflect.Method;

import fw.annotations.NotEmpty;
import fw.annotations.NotNegative;
import library.api.InvalidBookException;

public class Validator {
	public static void validate(Object o) throws ValidationExcetion {
		if (o == null)
			throw new InvalidBookException();
		Method[] methods = o.getClass().getMethods();
		try {
			for (Method method : methods) {
				if (method.getName().startsWith("get")) {
					if (method.getReturnType() == String.class) {
						if (method.getAnnotation(NotEmpty.class) != null) {
							String value = (String) method.invoke(o);
							if (value == null || value.trim().length() == 0)
								throw new ValidationExcetion();
						}
					} else if (method.getReturnType() == int.class) {
						if (method.getAnnotation(NotNegative.class) != null) {
							int value = (int) method.invoke(o);
							if (value < 0)
								throw new ValidationExcetion();
						}
					}
				}
			}
		} catch (ValidationExcetion ve) {
			throw ve;
		} catch (Exception e) {
			throw new ValidationExcetion();
		}
	}
}