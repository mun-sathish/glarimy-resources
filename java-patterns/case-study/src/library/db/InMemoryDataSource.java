package library.db;

import java.util.List;

import fw.data.DataSource;

public class InMemoryDataSource implements DataSource {

	@Override
	public void insert(Object item) {
		System.out.println("I will add " + item);
	}

	@Override
	public List<Object> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
