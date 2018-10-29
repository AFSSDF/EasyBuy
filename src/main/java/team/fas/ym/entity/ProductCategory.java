package team.fas.ym.entity;

import java.util.List;

public class ProductCategory {
	private int id;
	private String name;
	private int parentId;
	private int type;
	private String iconClass;
	private List productCategory;

	public List getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(List productCategory) {
		this.productCategory = productCategory;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getParentId() {
		return parentId;
	}

	public void setParentId(int parentId) {
		this.parentId = parentId;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getIconClass() {
		return iconClass;
	}

	public void setIconClass(String iconClass) {
		this.iconClass = iconClass;
	}
}
