package team.fas.ym.entity;

public class User {

	private int id;
	private String userName;
	private String loginName;
	private String password;
	private int sex;
	private String identityCode;
	private String email;
	private String mobile;
	private int type;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getIdentityCode() {
		return identityCode;
	}

	public void setIdentityCode(String identityCode) {
		this.identityCode = identityCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

//	`id` int(10) primary key AUTO_INCREMENT,
//	`userName` varchar(20) not null,
//	`loginName` varchar(20) not null,
//	`password` varchar(20) not null,
//	`sex` int(1) not null,
//	`identityCode` varchar(18),
//	`email` varchar(80),
//	`mobile` varchar(11),
//	`type` int(1) not null
}
