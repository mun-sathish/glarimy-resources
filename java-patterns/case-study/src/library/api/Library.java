package library.api;

public interface Library {
	public void add(Book book) throws InvalidBookException, LibraryException;
}
