<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Insert title here</title>
</head>
<body>
	<div class="m_left">
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a href="javascript:void(0);"><span
							class="glyphicon glyphicon-home"></span>管理中心</a>
					</h4>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a href="javascript:void(0);"><span
							class="glyphicon glyphicon-list-alt"></span>订单中心</a>
					</h4>
				</div>
				<div class="panel-collapse collapse in">
					<div class="panel-body">
						<a href="javascript:void(0);">我的订单</a>
					</div>
					<div class="panel-body">
						<a href="Member_Order.jsp">全部订单</a>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a href="javascript:void(0);"><span
							class="glyphicon glyphicon-user"></span>会员中心</a>
					</h4>
				</div>
				<div class="panel-collapse collapse in">
					<div class="panel-body">
						<a href="javascript:void(0);">用户信息</a>
					</div>
					<div class="panel-body">
						<a href="Member_User.jsp">用户列表</a>
					</div>
					<div class="panel-body">
						<a href="Member_User_Address.jsp">用户地址</a>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a href="javascript:void(0);"><span
							class="glyphicon glyphicon-shopping-cart"></span>商品管理</a>
					</h4>
				</div>
				<div class="panel-collapse collapse in">
					<div class="panel-body">
						<a href="Member_Product_Category.jsp">分类管理</a>
					</div>
					<div class="panel-body">
						<a href="Member_Product.jsp">商品管理</a>
					</div>
					<div class="panel-body">
						<a href="Member_Product_Edit.jsp?id=-1">商品上架</a>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
						<a href="javascript:void(0);"><span
							class="glyphicon glyphicon-earphone"></span>咨询中心</a>
					</h4>
				</div>
				<div class="panel-collapse collapse in">
					<div class="panel-body">
						<a href="Member_News.jsp">资讯列表</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>