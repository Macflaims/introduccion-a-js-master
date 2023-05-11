function crearArreglo(){
    let $elementos = document.querySelectorAll(".numero");
    let ArregloA = [];
    for (let i=0;i<$elementos.length;i++){
        ArregloA.push(Number($elementos[i].innerText));
    }

    return ArregloA;
}

function calcularPromedio(arregloA){
    let acumulador=0;
    for(let i=0;i<arregloA.length;i++){
        acumulador += arregloA[i];
    }
    return acumulador/arregloA.length;
}
function detectarMayor(arregloA){
    let numeroMayor = arregloA[0];
    for (let i=0; i<arregloA.length;i++){
        if (arregloA[i]>numeroMayor){
            numeroMayor=arregloA[i];
        }
    }
    return numeroMayor;
}

function detectarMenor(arregloA){
    let numeroMenor = arregloA[0];
    for (let i=0; i<arregloA.length;i++){
        if (arregloA[i]<numeroMenor){
            numeroMenor=arregloA[i];
        }
    }
    return numeroMenor;
}

function detectarRepetido(arregloA){
    let numeroMasRepetido;
    let cantidadDeRepeticiones = 0;
    for (let i=0;i<arregloA.length;i++){
        let aparicionesActuales = 0;
        for(let j=i;j<arregloA.length;j++){
            if (arregloA[i]===arregloA[j]){
                aparicionesActuales += 1;
            }
        }
        if(aparicionesActuales >= cantidadDeRepeticiones){
            cantidadDeRepeticiones = aparicionesActuales;
            numeroMasRepetido = arregloA[i];
        }
    }

    if(cantidadDeRepeticiones < 2){
        numeroMasRepetido = `No hay numeros repetidos`;
    }

    return numeroMasRepetido;
}


let primerArray = crearArreglo();
document.querySelector("#total-promedio").innerText = `El promedio de sus elementos es ${calcularPromedio(primerArray)}`;
document.querySelector("#numero-mayor").innerText = `El numero mayor de sus elementos es ${detectarMayor(primerArray)}`;
document.querySelector("#numero-menor").innerText = `El numero menor de sus elementos es ${detectarMenor(primerArray)}`;
document.querySelector("#mas-repetido").innerText = `El numero que mas se repite de sus elementos es ${detectarRepetido(primerArray)}`;