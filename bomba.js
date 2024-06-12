var minutos = 0
var segundos = 0
var frenar = document.getElementById('frenar')
let codigo = document.getElementById("codigo")
let mezcla = [];
let tiempo = 0;
const lobby = document.getElementById("inicio")
const bomba = document.getElementById("bomba")
function asignar(){
    minutos = parseInt(document.getElementById("elegir_minutos").value);
    segundos = parseInt(document.getElementById("elegir_segundos").value);
    bomba.hidden = false
    lobby.hidden = true
    //Ejecutar cada segundo pero solo cuando lo asigne

    tiempo = setInterval(cargarSegundo, 1000);

}

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
