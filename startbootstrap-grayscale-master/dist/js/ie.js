var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	alert('Internet Explorer는 호환되지 않는 브라우저 입니다.\nChrome이나 Edge 사용을 권장드립니다.')
}