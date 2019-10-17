$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


function chatbot() {
	document.getElementById("divIframe").innerHTML = 
		'<div class="divHeaderIframe row"></div><a class="botonCerrarIframe" href="javascript:closeFrame();">'+
			'<img class="testing" data-toggle="tooltip" data-placement="top" title="Cerrar" '+
				'src="img/cerrar.png" width="30"></a>'+
		'<iframe class="iframe" src="http://localhost:3000" '+
			'frameborder="0"></iframe>';
}

function closeFrame() {
	$('[data-toggle="tooltip"]').tooltip("hide");
    document.getElementById("divIframe").innerHTML = '';
}

