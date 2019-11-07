package fw.data;

import java.util.List;

public interface DataSource {
	public void insert(Object item);
	public List<Object> readAll();
}
