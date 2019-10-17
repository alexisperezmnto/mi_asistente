
// window.addEventListener('click', function(e){   
//   if (document.getElementById('divIframe').contains(e.target) ){

 

//   } else{
//     hideFrame()
//   }
// });



var iframe = false;

function chatbot() {
	document.getElementById("divIframe").innerHTML = 
		'<div class="divHeaderIframe row"></div>'+
			'<span id="botonMinIframe" onclick="hideFrame()">-</span>'+
			'<img class="botonCerrarIframe" onclick="closeFrame()"'+
				'src="img/cerrar.png" width="20">'+
			'<iframe class="iframe" src="http://localhost:3000" '+
				'frameborder="0"></iframe>';

	document.getElementById('divIframe').style.display = 'block';	

	iframe = true;

}

function closeFrame() {
    document.getElementById("divIframe").innerHTML = '';
}

function hideFrame() {
	if(iframe) {
		document.getElementById('divIframe').style.display = 'none';		
		iframe = false;

		document.getElementById('imgChat').style.display = 'block';

	}
}

function mostrarFrame() { 
	document.getElementById('imgChat').style.display = 'none';
	document.getElementById('divIframe').style.display = 'block';	
	iframe = true;
}
