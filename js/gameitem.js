var container = document.getElementById("container");

function game(d){
	var html = '<div class="gameitem">'
	html += '<span style="float:left;width:250px;height:250px;"><img src="./img/'+d.game+'.gif" width="250px" height="250px" /></span>';
	html += '<span style="float:left;width:550px;margin-left:10px;"><h2> ['+d.platform+'] '+d.title+'</h2></span>';
	return html+'</div>';
}

function articulate(data){
	var nowyear = 0
	var html = ""
	for (var i=0;i<data.length;i++){
		var d = data[i];
		if(nowyear!=d.year){
			nowyear=d.year;
			html += '<h1>' + nowyear + '</h1>'
		}
		html += game(d);
	}
	container.innerHTML += html;
}

