package library.api;

import fw.annotations.NotEmpty;
import fw.annotations.NotNegative;

public class Book {
	private int isbn;
	private String title;

	@NotNegative
	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	@NotEmpty
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
