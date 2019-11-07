package fw.core;

@SuppressWarnings("serial")
public class ValidationExcetion extends RuntimeException {

	public ValidationExcetion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ValidationExcetion(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public ValidationExcetion(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public ValidationExcetion(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public ValidationExcetion(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}
