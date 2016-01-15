var container = document.getElementById("container");
var data;
var request = new XMLHttpRequest();

function game(title){
	var html = '<div class="gameitem">' + title + '</div>' ;
	return html;
}
function parser(e){
	alert("loaded");
	data = JSON.parse(this.requestText);
	container.innerHTML += data;
}

request.open('GET', './gameDATA.json', true);
request.send();
request.addEventListener('load',parser);