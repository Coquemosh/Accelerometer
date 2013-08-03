//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

//$(document).ready(function(){

$(function(){
    var watchID=null;
    //Acelerometro
    $('#acelerometro .individual li').tap(function(){
       if($(this).index()==0){//Button "Iniciar"
           function onSuccess(acceleration) {
                $('#acelerometro h2').html('Acceleration X: ' + acceleration.x + '<br>' +
                  'Acceleration Y: ' + acceleration.y + '<br>' +
                  'Acceleration Z: ' + acceleration.z + '<br>');
            };
            
            function onError() {
                alert('onError!');
            };
            
            var options = { frequency: 500 };  // Update every .5 seconds. Atributo frequency
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
       }
       else{//Button "Detener"
           if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
               $('#acelerometro h2').html('Detenido');
            }
       }
    });
    
    //brujula
    $('#brujula .individual li').tap(function(){
       if($(this).index()==0){//Button "Iniciar"
           function onSuccess(heading) {
                $('#brujula h2').html('Direction: ' + heading + '<br>');
             //  var element = document.getElementById('heading');
            //   element.innerHTML = 'Direction: ' + heading;
            };
            
            function onError() {
                alert('onError!');
            };
            
            var options = { frequency: 3000 };  // Update every .5 seconds. Atributo frequency
            
            watchID = navigator.compass.watchHeading(compassSuccess, compassError, options);           
       }
       else{//Button "Detener"
           if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
               $('#acelerometro h2').html('Detenido');
            }
       }
    });
});