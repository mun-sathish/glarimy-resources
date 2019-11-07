package library.service;

import library.api.Book;
import library.api.InvalidBookException;
import library.api.Library;
import library.api.LibraryException;

public class LibraryLogger implements Library {

	private Library next;

	public LibraryLogger(Library next) {
		this.next = next;
	}

	@Override
	public void add(Book book) throws InvalidBookException, LibraryException {
		System.out.println("Adding " + book);
		next.add(book);
		System.out.println("Added " + book);
	}

}
