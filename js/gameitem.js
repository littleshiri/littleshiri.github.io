var container = document.getElementById("container");
var data;
var request = new XMLHttpRequest();

function game(title){
	var html = '<div class="gameitem">' + title + '</div>' ;
	return html;
}
function parser(){
	data = JSON.parse(this.requestText);
	alert(data);
	container.innerHTML += data;
}

request.open('GET', 'gameDATA.json', true);
request.send();
request.addEventListener('load',parser);