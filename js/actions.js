//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	ready: function(){
		document.addEventListener("deviceready",fn.init,false);
	},
	init: function(){
		$('#acelerometro .individual li').tap(fn.acc);
		$('#brujula .individual li').tap(fn.brj);
	},
	acc: function(){
		if($(this).index() == 0) //selecciona el boton preg si es el 1ero
			//$('#acelerometro .scroll h2').html('Iniciar'); //prueba en explorador
			acc.start();
		else
			//$('#acelerometro .scroll h2').html('Detener');
			acc.stop();
	},
	brj: function(){
		if($(this).index() == 0) //selecciona el boton preg si es el 1ero
			//$('#brujula .scroll h2').html('Iniciar'); //prueba en explorador
			brj.start();
		else
			//$('#brujula .scroll h2').html('Detener');
			brj.stop();
	}
}
$(fn.ready);