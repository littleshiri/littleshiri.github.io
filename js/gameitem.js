var container = document.getElementById("container");
var data;
var request = new XMLHttpRequest();

function game(title){
	var html = '<div class="gameitem">' + title + '</div>' ;
	return html;
}
function parser(e){
	alert(this.requestText);
	data = JSON.parse(this.requestText);
	container.innerHTML += data;

}

request.onload = parser;
request.open('GET', 'js/gameDATA.json', true);
request.send();