package fw.core;

import java.io.FileReader;
import java.lang.reflect.Method;
import java.util.Properties;

import fw.annotations.Inject;

public class Factory {
	private Properties props;

	public Factory() throws Exception {
		props = new Properties();
		props.load(new FileReader("conf.properties"));
	}
	
	@SuppressWarnings("rawtypes")
	public Object get(String key) throws Exception {
		String name = props.getProperty(key);
		Class claz = Class.forName(name);
		Object o = claz.newInstance();

		this.inject(o);

		o = this.addProxy("logger", o);
		o = this.addProxy("validator", o);
		return o;
	}

	private Object addProxy(String feature, Object next) throws Exception {
		String name;
		if ((name = props.getProperty(feature)) != null)
			return Class.forName(name)
					.getDeclaredConstructor(next.getClass().getInterfaces()[0])
					.newInstance(next);

		return next;
	}

	private Object inject(Object o) throws Exception {
		for (Method method : o.getClass().getMethods()) {
			if (method.getName().startsWith("get") && method.getAnnotation(Inject.class) != null) {
				String name = method.getName().substring(3);
				String ref = props.getProperty(name.toLowerCase());
				Class type = method.getReturnType();
				o.getClass().getMethod("set" + name, type).invoke(o, Class.forName(ref).newInstance());
			}
		}
		return o;
	}
}