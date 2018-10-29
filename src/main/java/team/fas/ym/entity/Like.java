package team.fas.ym.entity;

public class Like {
	private int id;
	private int user_id;
	private int product_id;
	private int type;
	private int count_num;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getCount_num() {
		return count_num;
	}

	public void setCount_num(int count_num) {
		this.count_num = count_num;
	}

}
