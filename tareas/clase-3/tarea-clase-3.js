// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreDelUsuario = prompt("Cual es su nombre?").toLowerCase();
const miNombre = "martin"
const nombreDeMiPrimo = "nahuel"

if (nombreDelUsuario.toLocaleLowerCase() === miNombre){
    console.log(`Hola!, yo tambien me llamo ${nombreDelUsuario}`);
}else if (nombreDelUsuario.toLocaleLowerCase() === nombreDeMiPrimo){
    console.log(`Hola ${nombreDelUsuario}! te llamas igual que mi primo`);
}
else {
    console.log(`Hola ${nombreDelUsuario}!`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.



const edadUsuario = Number(prompt("¿Cuál es tu edad?"));
if(edadUsuario > 22){
    alert("Sos mayor que yo!")
}
else if(edadUsuario <22){
    alert("Sos menor que yo!")
}
else if(edadUsuario == 22){
    alert("Tenemos la misma edad!")
}
else{
    alert("No entendí tu respuesta")
}



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const posesionDeDocumento= prompt("Tenés documento?").toLocaleLowerCase()
if(posesionDeDocumento==="si"){
    const edad= prompt("Cuál es tu edad?")
    if(edad>=18){
        alert("Podés entrar al bar")
    }
    else{alert("No podés entrar al bar")}
    
}
else if(posesionDeDocumento==="no"){
    alert("No podés entrar al bar sin documento")
}
else{alert("No entendí tu respuesta")}

