var minutos = parseInt(document.getElementById("elegir_minutos").value)
var segundos = parseInt(document.getElementById("elegir_segundos").value)
var frenar = document.getElementById('frenar')
let codigo = "";
let mezcla = [];
let tiempo = 0;
let adivinar = ""
const lobby = document.getElementById("inicio")
const bomba = document.getElementById("bomba")
function asignar() {
    codigo = document.getElementById("codigo").value;
    minutos = parseInt(document.getElementById("elegir_minutos").value);
    segundos = parseInt(document.getElementById("elegir_segundos").value);
    bomba.removeAttribute("hidden")
    lobby.setAttribute("style", "display: none;")
    //Ejecutar cada segundo pero solo cuando lo asigne
    tiempo = setInterval(cargarSegundo, 1000);
}

//Definir y ejecutar los segundos
function cargarSegundo() {
    var txtSegundos;
    if (segundos < 0) {
        segundos = 59;
    }
    //Mostrar los segundos en pantalla
    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos)

}
//Definir y ejecutar minutos
function cargarMinutos(segundos) {
    var txtMinutos;
    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500)
    } else if (segundos == -1 && minutos == 0) {
        document.getElementById("estado").innerHTML = "BOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!!!"
        clearInterval(tiempo)
        document.getElementById("volver").removeAttribute("hidden")
    }
    //Mostrar los minutos en pantalla
    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos

}
//Pausar el temporizador
function detener() {
    
    adivinar = document.getElementById("adivinar_codigo").value
    document.getElementById("estado").innerHTML = "Probando..."
    if (codigo === adivinar){
        setTimeout(() => {
            clearInterval(tiempo)
            document.getElementById("estado").innerHTML = "Bomba detenida"
            document.getElementById("volver").removeAttribute("hidden")
        }, 2000);
    }
    else{
        setTimeout(() => {
            document.getElementById("estado").innerHTML = "Código Erroneo"
        }, 2000);
    }
    
    
}
function volver(){
    lobby.setAttribute("style", "display: grid")
    bomba.hidden = true
    document.getElementById("estado").innerHTML = ""
    document.getElementById("volver").hidden = true
}