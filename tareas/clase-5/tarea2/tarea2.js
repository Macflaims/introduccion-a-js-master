document.querySelector("#ingresar").onclick= ()=>{
    const primerNombre= document.querySelector("#primer-nombre-usuario").value;
    const segundoNombre= document.querySelector("#segundo-nombre-usuario").value;
    const apellido= document.querySelector("#apellido-usuario").value;
    const edad= document.querySelector("#edad-usuario").value;

    document.querySelector("#informacion-usuario").innerHTML=`Los datos ingresados son: ${primerNombre} ${segundoNombre} ${apellido} de ${edad} años de edad`;
    document.querySelector("#bienvenido").innerHTML=`Bienvenido ${primerNombre}!`
}



