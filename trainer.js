
function getStudent(){
	const Http = new XMLHttpRequest();
	const url = 'http://localhost:9002/showAll';
	Http.open("GET", url);
	Http.onreadystatechange = function(e){
		data=JSON.parse(Http.responseText);
		data.forEach(function(item){
			var regno = document.createElement("span");
			var name = document.createElement("span");
			var marks = document.createElement("span");
			regno.innerHTML=item.regno;
			document.body.appendChild(regno);
		})
	}
}
