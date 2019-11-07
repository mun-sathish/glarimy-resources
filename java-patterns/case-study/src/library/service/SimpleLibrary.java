package library.service;

import fw.annotations.Inject;
import fw.data.DataSource;
import library.api.Book;
import library.api.InvalidBookException;
import library.api.Library;
import library.api.LibraryException;

public class SimpleLibrary implements Library {
	private DataSource db;

	public SimpleLibrary() {
		System.out.println("SimpleLibrary: cons");
	}

	@Inject
	public DataSource getDb() {
		return db;
	}

	public void setDb(DataSource db) {
		this.db = db;
	}

	@Override
	public void add(Book book) throws InvalidBookException, LibraryException {
		db.insert(book);
	}

}
