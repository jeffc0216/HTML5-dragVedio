var file;
var fileReader;

function doFirst(){
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	file = e.dataTransfer.files[0];
	document.getElementById('fileName').innerHTML = file.name;
	
	fileReader = new FileReader();
	fileReader.readAsDataURL(file);
	fileReader.onload = function(){
		var myMovie = document.getElementById('myMovie');
		myMovie.src = fileReader.result;
		myMovie.controls = true;
	};

}

window.addEventListener('load', doFirst, false);