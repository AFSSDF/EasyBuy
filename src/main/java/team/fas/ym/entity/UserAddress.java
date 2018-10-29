package team.fas.ym.entity;

public class UserAddress {
	private int id;
	private User user;
	private String address;
	private String createTime;
	private int isDefault;
	private String remark;
	private String jutidress;

	public String getAddress() {
		return address;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public int getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(int isDefault) {
		this.isDefault = isDefault;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getJutidress() {
		return jutidress;
	}

	public void setJutidress(String jutidress) {
		this.jutidress = jutidress;
	}

}
