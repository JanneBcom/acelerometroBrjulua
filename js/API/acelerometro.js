var acc = {
	watchID:null, 
	onSuccess: function (acceleration) {
		//cambia la etiqueta de detenido a las coordenadas.
		$('#acelerometro .scroll h2').html('Acceleration X: ' + acceleration.x + '<br>' +
			   'Acceleration Y: ' + acceleration.y + '<br>' +
			   'Acceleration Z: ' + acceleration.z + '<br>' +
			   'Timestamp: '      + acceleration.timestamp + '<br>');
	},
	onError: function () {
		alert('onError!');
	},
	start: function(){
		alert("entro");
		if(acc.watchID == null){
			var options = { frequency: 500 };  // Update every 3 seconds
			acc.watchID = navigator.accelerometer.watchAcceleration(acc.onSuccessonSuccess, acc.onErroronError, options);
		}
	},
	stop: function(){
		alert("entro");
		if(acc.wathID != null){ //solo cuando este activo aplica el stop
			navigator.accelerometer.clearWatch(acc.watchID);
			acc.watchID=null;
			//cambia la etiqueta al valor inicial.
			$('#acelerometro .scroll h2').html('Detenido');
		}
	}
};