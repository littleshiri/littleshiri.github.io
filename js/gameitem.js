var container = document.getElementById("container");

function game(d){
	var html = '<div class="gameitem">' + d.title + '</div>' ;
	return html;
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

