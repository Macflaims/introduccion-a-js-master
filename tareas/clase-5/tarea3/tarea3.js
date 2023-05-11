let segundosTotales = 0;

let inputHoras = document.querySelector("#horas-clases");
let inputMinutos = document.querySelector("#minutos-clases");
let inputSegundos = document.querySelector("#segundos-clases");

let tiempoTotal = document.querySelector("#tiempo-total")

document.querySelector("#calcular-tiempo").onclick = function(){
    segundosTotales += Number(inputSegundos.value);
    segundosTotales += Number(inputMinutos.value)*60;
    segundosTotales += Number(inputHoras.value)*60*60;

    inputHoras.value = "";
    inputMinutos.value = "";
    inputSegundos.value = "";

    let tiempoRestante = segundosTotales;

    let horas = Math.floor(tiempoRestante/60/60);
    tiempoRestante -= horas*60*60;
    let minutos = Math.floor(tiempoRestante/60);
    tiempoRestante -= minutos*60;
    let segundos = tiempoRestante;

    tiempoTotal.innerText = `El curso dura ${horas} horas, ${minutos} minutos, ${segundos} segundos.`
}