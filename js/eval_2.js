function elementoValido(idCampo) {
    let campo = document.getElementById(idCampo);
    let valor = campo.value.trim();

    // Si el campo está completamente vacío
    if (valor == '') {
        if (idCampo == 'fecha_nac' || idCampo == 'anios_carrera' || idCampo == 'curriculum') {
            // Campos opcionales: si quedan vacíos se quitan los colores de alerta
            campo.classList.remove('is-invalid', 'is-valid');
        } else {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        }
        return;
    }

    // 1. VALIDACIÓN DEL RUT
    if (idCampo == 'rut') {
        let valorRut = valor.toUpperCase();
        let regexRut = /^\d{7,8}[0-9K]$/;

        if (regexRut.test(valorRut) == false || validarRutChileno(valorRut) == false) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    } 
    // 2. VALIDACIÓN DEL EMAIL
    else if (idCampo == 'email') {
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(valor) == false) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    }
    // 3. VALIDACIÓN DE LA FECHA DE NACIMIENTO (RESTRICCIÓN: MAYORÍA DE EDAD)
    else if (idCampo == 'fecha_nac') {
        let fechaNacimiento = new Date(valor + "T00:00:00");
        let hoy = new Date();
        
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (isNaN(fechaNacimiento.getTime()) || edad < 18) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    }
    // 4. VALIDACIÓN DE AÑOS DE CARRERA
    else if (idCampo == 'anios_carrera') {
        if (isNaN(valor) || parseInt(valor) < 0) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    }
    // 5. VALIDACIÓN DEL CURRÍCULUM (SOPORTA PDF Y DOCX)
    else if (idCampo == 'curriculum') {
        let nombreArchivo = valor.toLowerCase();
        // Comprobamos si termina con .pdf O termina con .docx
        if (nombreArchivo.endsWith('.pdf') || nombreArchivo.endsWith('.docx')) {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid'); // Verde si cumple cualquiera de los dos
        } else {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid'); // Rojo si es otro formato
        }
    }
    // 6. VALIDACIÓN DE LA CONTRASEÑA
    else if (idCampo == 'password') {
        let regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-+=])[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-+=]{8,12}$/;
        if (regexPass.test(valor) == false) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    }
    // 7. VALIDACIÓN DE REPETIR CONTRASEÑA
    else if (idCampo == 'repetir_password') {
        let valorPassword = document.getElementById('password').value;
        if (valor !== valorPassword) {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    }
    // OTROS CAMPOS REQUERIDOS GENERALES (Nombre Completo)
    else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
    }
}

// Función del botón Guardar
function validarFormulario() {
    let esValido = true;

    // 1. Validar Nombre
    let campoNombre = document.getElementById('nombre');
    if (campoNombre.value.trim() == '') {
        campoNombre.classList.remove('is-valid');
        campoNombre.classList.add('is-invalid');
        esValido = false;
    } else {
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    }

    // 2. Validar Rut
    let campoRut = document.getElementById('rut');
    let valorRut = campoRut.value.trim().toUpperCase();
    let regexRut = /^\d{7,8}[0-9K]$/;

    if (valorRut == '' || regexRut.test(valorRut) == false || validarRutChileno(valorRut) == false) {
        campoRut.classList.remove('is-valid');
        campoRut.classList.add('is-invalid');
        esValido = false;
    } else {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    }

    // 3. Validar Fecha de Nacimiento
    let campoFecha = document.getElementById('fecha_nac');
    let valorFecha = campoFecha.value.trim();
    if (valorFecha !== '') {
        let fechaNacimiento = new Date(valorFecha + "T00:00:00");
        let hoy = new Date();
        
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (isNaN(fechaNacimiento.getTime()) || edad < 18) {
            campoFecha.classList.remove('is-valid');
            campoFecha.classList.add('is-invalid');
            esValido = false;
        } else {
            campoFecha.classList.remove('is-invalid');
            campoFecha.classList.add('is-valid');
        }
    } else {
        campoFecha.classList.remove('is-invalid', 'is-valid');
    }

    // 4. Validar Años de carrera
    let campoAnios = document.getElementById('anios_carrera');
    let valorAnios = campoAnios.value.trim();
    if (valorAnios !== '') {
        if (isNaN(valorAnios) || parseInt(valorAnios) < 0) {
            campoAnios.classList.remove('is-valid');
            campoAnios.classList.add('is-invalid');
            esValido = false;
        } else {
            campoAnios.classList.remove('is-invalid');
            campoAnios.classList.add('is-valid');
        }
    } else {
        campoAnios.classList.remove('is-invalid', 'is-valid');
    }

    // 5. Validar Currículum (Soporta PDF y DOCX si se adjunta algo)
    let campoCV = document.getElementById('curriculum');
    let valorCV = campoCV.value.trim();
    if (valorCV !== '') {
        let nombreArchivo = valorCV.toLowerCase();
        if (nombreArchivo.endsWith('.pdf') || nombreArchivo.endsWith('.docx')) {
            campoCV.classList.remove('is-invalid');
            campoCV.classList.add('is-valid');
        } else {
            campoCV.classList.remove('is-valid');
            campoCV.classList.add('is-invalid');
            esValido = false;
        }
    } else {
        campoCV.classList.remove('is-invalid', 'is-valid');
    }

    // 6. Validar Email
    let campoEmail = document.getElementById('email');
    let valorEmail = campoEmail.value.trim();
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valorEmail == '' || regexEmail.test(valorEmail) == false) {
        campoEmail.classList.remove('is-valid');
        campoEmail.classList.add('is-invalid');
        esValido = false;
    } else {
        campoEmail.classList.remove('is-invalid');
        campoEmail.classList.add('is-valid');
    }

    // 7. Validar Contraseña
    let campoPassword = document.getElementById('password');
    let valorPassword = campoPassword.value;
    let regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-+=])[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-+=]{8,12}$/;
    if (valorPassword == '' || regexPass.test(valorPassword) == false) {
        campoPassword.classList.remove('is-valid');
        campoPassword.classList.add('is-invalid');
        esValido = false;
    } else {
        campoPassword.classList.remove('is-invalid');
        campoPassword.classList.add('is-valid');
    }

    // 8. Validar Repetir Contraseña
    let campoRepetir = document.getElementById('repetir_password');
    let valorRepetir = campoRepetir.value;
    if (valorRepetir == '' || valorPassword !== valorRepetir) {
        campoRepetir.classList.remove('is-valid');
        campoRepetir.classList.add('is-invalid');
        esValido = false;
    } else {
        campoRepetir.classList.remove('is-invalid');
        campoRepetir.classList.add('is-valid');
    }

    if (esValido == true) {
        alert("¡El envío de datos ha sido correcto!");
    }
}

// Función para limpiar el formulario (Botón Cancelar)
function limpiarFormulario() {
    document.getElementById('registroForm').reset();

    document.getElementById('nombre').classList.remove('is-invalid', 'is-valid');
    document.getElementById('rut').classList.remove('is-invalid', 'is-valid');
    document.getElementById('fecha_nac').classList.remove('is-invalid', 'is-valid');
    document.getElementById('anios_carrera').classList.remove('is-invalid', 'is-valid');
    document.getElementById('curriculum').classList.remove('is-invalid', 'is-valid');
    document.getElementById('email').classList.remove('is-invalid', 'is-valid');
    document.getElementById('password').classList.remove('is-invalid', 'is-valid');
    document.getElementById('repetir_password').classList.remove('is-invalid', 'is-valid');
}

// Validación del Módulo 11 Chileno
function validarRutChileno(rut) {
    let cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1);
    
    let suma = 0;
    let multiplo = 2;
    
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplo;
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }
    
    let dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 11) dvEsperado = "0";
    else if (dvEsperado === 10) dvEsperado = "K";
    else dvEsperado = dvEsperado.toString();
    
    return dv === dvEsperado;
}