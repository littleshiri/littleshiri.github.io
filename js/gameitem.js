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

req.open('GET', 'gameDATA.json', true);
req.send();
req.addEventListener('load',parser);