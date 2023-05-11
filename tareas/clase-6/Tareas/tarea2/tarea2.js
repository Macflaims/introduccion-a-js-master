document.querySelector("#boton-siguiente").onclick = function(event){
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    eliminarIntegrantes();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

function crearIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes>0){
        mostrarBotonCalcular();}
    else{
        reset();}
    for(let i=0;i<cantidadIntegrantes;i++){
        crearIntegrante(i);}
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className = "";
    document.querySelector("#calcular-salarios").className = "";
}

function reset(){
    eliminarIntegrantes();
    ocultarBotonCalcular();
    ocultarCalculos();
}

function eliminarIntegrantes(){
    const integrantes = document.querySelectorAll(".integrantes");
    for(let i=0;i<integrantes.length;i++){
        integrantes[i].remove();
    }
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className = "oculto";
    document.querySelector("#calcular-salarios").className = "oculto";
}

function ocultarCalculos(){
    document.querySelector("#resultados-calculo").className = "oculto";
    document.querySelector("#resultados-salario").className = "oculto";
    document.querySelector("#calcular-salarios").textContent="Mostrar Salarios";
    document.querySelector("#calcular-salarios").onclick= function(){mostrarInputSalarios()}
}

function crearIntegrante(indice){
    const div = document.createElement('div');
    div.className = "integrantes";

    const label = document.createElement("label");
    label.textContent = `Edad del integrante numero ${indice+1}`;
    const input = document.createElement("input");
    input.type = "number";
    input.className="input-edad"

    const inputSalario=document.createElement("input");
    inputSalario.type = "number";
    inputSalario.placeholder=`Salario del integrante ${indice+1}`;
    inputSalario.className="oculto";
    inputSalario.classList.add("input-salario")

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(inputSalario);

    const integrantes = document.querySelector("#integrantes");
    integrantes.appendChild(div);
}

document.querySelector("#calcular-salarios").onclick = mostrarInputSalarios;

function mostrarInputSalarios(){
    let salarios = document.querySelectorAll(".input-salario");
    for(let i=0; i<salarios.length;i++){
        salarios[i].classList.remove("oculto");
        salarios[i].classList.add("mostrar");
    }
    mostrarOcultarSalarios();
}

document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerEdades();
    document.querySelector("#edad-menor").textContent = `${obtenerMenor(numeros)}`
    document.querySelector("#edad-mayor").textContent = `${obtenerMayor(numeros)}`
    document.querySelector("#edad-promedio").textContent = `${obtenerPromedio(numeros)}`
    mostrarCalculos();

    const salarios = obtenerSalarios(); 
    document.querySelector("#salario-menor").textContent = `${obtenerMenor(salarios)}`
    document.querySelector("#salario-mayor").textContent = `${obtenerMayor(salarios)}`
    document.querySelector("#salario-promedio").textContent = `${obtenerPromedio(salarios)}`
    document.querySelector("#salario-mensual-promedio").textContent = `${obtenerPromedioMensual(salarios)}`
        
    const salarioIntegrante = document.querySelectorAll(".input-salario");
        if(salarioIntegrante[0].className === "input-salario mostrar"){   
            mostrarCalculosSalarios();
            mostrarOcultarSalarios()         
        }
        
    event.preventDefault();
}

function mostrarOcultarSalarios(){
    const botonSalario = document.querySelector("#calcular-salarios");
    botonSalario.textContent="Ocultar Salarios"
    botonSalario.onclick= function(){
        let salarios = document.querySelectorAll(".input-salario");
        for(let i=0; i<salarios.length;i++){
        salarios[i].classList.add("oculto");
        }
        document.querySelector("#resultados-salario").className = "oculto";
        botonSalario.textContent="Mostrar Salarios";
        botonSalario.onclick= function(){mostrarInputSalarios()}
    }
}

document.querySelector("#boton-reset").onclick = reset;

function mostrarCalculos(){
    document.querySelector("#resultados-calculo").className = "";
}

function mostrarCalculosSalarios(){
    document.querySelector("#resultados-salario").className = "";
}

function obtenerEdades(){
    const integrantes = document.querySelectorAll(".input-edad");
    const edades = [];
    for (let i=0;i<integrantes.length;i++){
        edades.push(Number(integrantes[i].value));
    }
    return edades;
}

function obtenerSalarios(){
    const salariosIntegrantes = document.querySelectorAll(".input-salario");
    const salarios = [];
    for (let i=0;i<salariosIntegrantes.length;i++){
        salarios.push(Number(salariosIntegrantes[i].value));
    }
    return salarios;
}
    

