function paging($mem_footer, pageCur, pageTotal) {
	$mem_footer.append('<li><a href="javascript:flushList(1);">首页</a></li>');
	$mem_footer.append('<li><a href="javascript:flushList('
			+ (pageCur - 1) + ');" aria-label="Previous"> '
			+ '<span aria-hidden="true">&laquo;</span></a></li>');
	var i = pageCur - 2;
	if (pageCur + 2 > pageTotal) {
		i = pageTotal - 4;
	}
	for (j = 0; i <= pageTotal; i++, j++) {
		if (j == 5) {
			break;
		}
		if (i < 1) {
			j--;
			continue;
		}
		if (i == pageCur) {
			$mem_footer
					.append('<li class="active"><a href="javascript:flushList('
							+ i + ');">' + i + '</a></li>');
		} else {
			$mem_footer.append('<li><a href="javascript:flushList(' + i
					+ ');">' + i + '</a></li>');
		}
	}
	$mem_footer.append('<li><a href="javascript:flushList(' + (pageCur + 1)
			+ ');" aria-label="Next"> '
			+ '<span aria-hidden="true">&raquo;</span></a></li>');
	$mem_footer.append('<li><a href="javascript:flushList(' + pageTotal
			+ ')">尾页</a></li>');
}