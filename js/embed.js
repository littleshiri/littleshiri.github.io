function draw(file,w,h){
	var html='<table style="width:100%;height:100%;position:fixed;"><tr><td><div align="center">';
	html+='<embed src="' + file + '" width="' + w + '" height="' + h + '">';
	html+='</div></td></tr></table>';
	document.body.innerHTML += html;
}