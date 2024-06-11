var minutos = 1;
var segundos = 0;
var frenar = document.getElementById('frenar')
//Definir y ejecutar los segundos
function cargarSegundo(){
    var txtSegundos;
    if(segundos < 0){
        segundos = 59;
    }
    //Mostrar los segundos en pantalla
    if (segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos)
    
}
//Definir y ejecutar minutos
function cargarMinutos(segundos){
    var txtMinutos;
    if(segundos == -1 && minutos !== 0){
        setTimeout(() => {
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        alert("BOOM!");
        clearInterval(tiempo)
    }
    //Mostrar los minutos en pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos
    explotar(segundos, minutos)
}
//Terminar el temporizador
function explotar(segundos, minutos){
    if(segundos == -1 && minutos == 0){
        
    }
}
//Ejecutar cada segundo
var tiempo = setInterval(cargarSegundo, 1000);

//Pausar el temporizador
function detener(){
    var eliminación = setTimeout(() => {
        clearInterval(tiempo)
    alert("La bomba se detuvo :)")
    }, 7000);
}

//Cancelar la opción
function cancelar(){
    clearTimeout(eliminación)
}
