package library.service;

import fw.core.ValidationExcetion;
import fw.core.Validator;
import library.api.Book;
import library.api.InvalidBookException;
import library.api.Library;
import library.api.LibraryException;

public class LibraryValidator implements Library {
	private Library next;

	public LibraryValidator(Library next) {
		this.next = next;
	}

	@Override
	public void add(Book book) throws InvalidBookException, LibraryException {
		try {
			Validator.validate(book);
			next.add(book);
		}catch(ValidationExcetion e) {
			throw new InvalidBookException();
		}
	}
}
