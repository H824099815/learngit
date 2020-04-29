//对jQuery的ajax进行进一步封装,减少多个页面中相同的ajax代码

function myHttp(options) {
	options.dataType = 'json';
	options.contentType = 'application/json';
	var success = options.success;
	options.success = function(result) {
		if(result.msg !== '') alert(result.msg);
		switch(result.code) {
			case 0:
				success(result.data);
				break;
			// case 401:
			// 	Cookies.set('target',window.location.href);
			// 	window.location.href = '../login.html';
			// 	break;
			// 	default:
			// 	break;
		}
	};
	$.ajax(options);
}