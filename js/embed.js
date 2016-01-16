function draw(file,w,h){
	var tailscript = '<div id="tail"><a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br/>이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">크리에이티브 커먼즈 저작자표시-변경금지 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.</div>';
	var html='<table style="width:100%;height:100%;position:fixed;"><tr><td><div align="center">';
	html+='<embed src="' + file + '" width="' + w + '" height="' + h + '">';
	html+='</div>';
	html+=tailscript;
	html+='</td></tr></table>';
	document.body.innerHTML += html;
	document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../normal.css"/>';
}