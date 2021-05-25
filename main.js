var formulario = document.getElementById('form'),
    nombre = formulario.nombre,
    correo = formulario.mail,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    enviar = formulario.enviar,
    avisos = document.getElementById('avisos');

function validacionNombre(e){
    if(nombre.value == "" || nombre.value ==  null){   
        avisos.style.display = "block";
        avisos.innerHTML += "<li>Ingrese un nombre valido</li>";
        e.preventDefault();

    } else{
        avisos.style.display = 'none';
    }

}

function validacionCorreo(e){
    if( correo.value=="" || correo.value == null){
        avisos.style.display= 'block';
        avisos.innerHTML += '<li>ingrese un correo valido</li>';
        e.preventDefault();
    } else{
        avisos.style.display = 'none';
    }
}

function validacionSexo (e){
    if(sexo.value == "" || sexo.value == null){
        avisos.style.display = 'block';
        console.log('sexo no seleccionado')
        avisos.innerHTML += '<li>ingrese un sexo</li>';
        e.preventDefault();
    } else {
        avisos.style.display = 'none';
    }
}

function validacionTerminos(e){
    if ( terminos.checked == false){
        avisos.style.display = 'block';
        console.log('terminos no aceptados')
        avisos.innerHTML += '<li>acepte los terminos </li>';
        e.preventDefault();
    } else{
        avisos.style.display = 'none';
    }
}

function validaciones(e){
    avisos.innerHTML = '';
    validacionNombre(e);
    validacionCorreo(e);
    validacionSexo(e);
    validacionTerminos(e);
}

formulario.addEventListener('submit', validaciones);