var container = document.getElementById("container");
var data;
var request = new XMLHttpRequest();

function game(title){
	var html = '<div class="gameitem">' + title + '</div>' ;
	return html;
}
function parser(e){
	if(this.readyState==4 && this.status==200){
		alert(this.requestText);
		//data = JSON.parse(this.requestText);
		container.innerHTML += this.requestText;
	}
}

request.onreadystatechange = parser
request.open('GET', 'data/gameDATA.json', true);
request.send();
