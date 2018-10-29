package team.fas.ym.test;


import team.fas.ym.util.MD5Util;

public class Md5Test {
	// 测试主函数
	public static void main(String args[]) {
		String s = new String("123456");
		try {
			System.out.println(MD5Util.md5(s));
			System.out.println(MD5Util.verify(s, MD5Util.md5(s)));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
