var container = document.getElementById("container");
var data={
	"title":123
};
var request = new XMLHttpRequest();

function game(d){
	var html = '<div class="gameitem">' + d.title + '</div>' ;
	container.innerHTML+=html;
	return html;
}

var xmlhttp = new XMLHttpRequest();
var url = "gameData.json";

xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    game(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

game(data)