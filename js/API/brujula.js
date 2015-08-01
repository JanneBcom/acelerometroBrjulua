var brj = {
	watchID:null, 
	onSuccess: function (heading) {
		//cambia la orientacion
		$('#brujula .scroll h2').html('Heading: ' + heading.magneticHeading);
	},
	onError: function () {
		alert('Compass error: ' + compassError.code);
	},
	start: function(){
		alert("entro2");
		if(brj.watchID == null){
			var options = { frequency: 500 };  // Update every medio seconds
			brj.watchID = navigator.compass.watchHeading(brj.onSuccess, brj.onError, options);
		}
	},
	stop: function(){
		alert("entro2");
		if(brj.wathID != null){ //solo cuando este activo aplica el stop
			navigator.compass.clearWatch(brj.watchID);
			brj.watchID = null;
			//cambia la etiqueta al valor inicial.
			$('#brujula .scroll h2').html('Detenido');
		}
	}
};