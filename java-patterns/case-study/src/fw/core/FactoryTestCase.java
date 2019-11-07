package fw.core;

import library.api.Book;
import library.api.Library;

public class FactoryTestCase {
	public static void main(String[] args) throws Exception {
		Book book = new Book();
		book.setTitle("Design Patterns");
		Library library = (Library) new Factory().get("library");
		library.add(book);
	}

}
