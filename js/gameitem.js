var container = document.getElementById("container");

function game(d){
	var link;
	var icon;
	switch (d.platform){
		case "Android":
		link = d.link;
		icon = 'img/androidicon.gif';
		break;

		case "Flash":
		link = "game/" + d.game + '.html';
		icon = 'img/flashicon.gif';
		break;
	}

	var html = '<div class="gameitem">'
	html += '<span style="float:left;width:250px;height:250px;"><img src="./img/'+d.game+'.gif" width="250px" height="250px" /></span>';
	html += '<span style="float:left;width:550px;height:250px;margin-left:10px;"><div style="height:190px"><a href="'+link+'"><h2><img src="'+icon+'" width="32px" height="32px" align="top" border="0px"/> '+d.title+'</h2></a><p>'+d.comment+'</p></div>';
	html += '<div style="height:50px"><p>개발자 평점</p></div></span>';
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

