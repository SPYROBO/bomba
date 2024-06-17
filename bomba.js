// VARIABLES
let txtSegundos;
let txtMinutos;
let minutos = parseInt(document.getElementById("elegir_minutos").value);
let segundos = parseInt(document.getElementById("elegir_segundos").value);
let frenar = document.getElementById('frenar');
let codigo = "";
let mezcla = [];
let tiempo = 0;
let adivinar = "";
const lobby = document.getElementById("inicio");
const bomba = document.getElementById("bomba");

//ALGORITMOS
function asignar() {
    codigo = document.getElementById("codigo").value;
    minutos = parseInt(document.getElementById("elegir_minutos").value);
    segundos = parseInt(document.getElementById("elegir_segundos").value);
    bomba.removeAttribute("hidden");
    lobby.setAttribute("style", "display: none;");
    mezcla = [];
    for(i = 0; i < codigo.length; i++){
        mezcla.push(codigo[i]);
    }
    randomizar(mezcla)
    //Ejecutar cada segundo pero solo cuando lo asigne
    tiempo = setInterval(cargarSegundo, 1000);
}

//Aleatorizar el array
function randomizar(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

//Definir y ejecutar los segundos
function cargarSegundo() {

    if (segundos < 0) {
        segundos = 59;
    }

    //Mostrar los segundos en pantalla
    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }
    //En caso que sea mayor a 59 se suma un minuto o los que sean necesarios
    if (segundos > 59) {
        minutos += Math.floor(segundos / 60);
        segundos = segundos % 60;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos);

}

//Definir y ejecutar minutos
function cargarMinutos(segundos) {
    
    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500)
    } else if (segundos == -1 && minutos == 0) {
        document.getElementById("estado").innerHTML = "BOOOOOOOOOOOOOOOOOOOOOM!!!!";
        clearInterval(tiempo);
        document.getElementById("volver").removeAttribute("hidden");
    }

    //Mostrar los minutos en pantalla
    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
}

//Pausar el temporizador
function detener() {
    adivinar = document.getElementById("adivinar_codigo").value;
    document.getElementById("estado").innerHTML = "Probando...";
    if (codigo === adivinar){
        setTimeout(() => {
            clearInterval(tiempo);
            document.getElementById("estado").innerHTML = "Bomba detenida";
            document.getElementById("volver").removeAttribute("hidden");
        }, 2000);
    }
    else{
        setTimeout(() => {
            document.getElementById("mezcla").innerHTML = mezcla.join(" - ");
            document.getElementById("estado").innerHTML = "Código Erróneo";
        }, 2000);
    }
}

//Volver al inicio
function volver(){
    lobby.setAttribute("style", "display: grid")
    bomba.hidden = true;
    document.getElementById("estado").innerHTML = "";
    document.getElementById("volver").hidden = true;
    document.getElementById("mezcla").innerHTML = "";
}