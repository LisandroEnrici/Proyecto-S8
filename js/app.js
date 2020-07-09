// VARIABLES GLOBARLES
const emailBox = document.getElementById('email');
const asuntoBox = document.getElementById('asunto');
const mensajeBox = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// EVENTLISTENER
eventListener();

function eventListener() {
    // Inicio de la app
    document.addEventListener('DOMContentLoaded', inicioForm);

    // Validar campos cargados
    emailBox.addEventListener('blur', validarCampo)
    asuntoBox.addEventListener('blur', validarCampo)
    mensajeBox.addEventListener('blur', validarCampo)
};

// FUNCIONES

function inicioForm() {
    // Deshabilitamos el btnEnviar
    btnEnviar.disabled = true;
    // Limpiamos los textBox ;; los desfocuseamos
    emailBox.value = ''; emailBox.blur;
    asuntoBox.value = ''; asuntoBox.blur;
    mensajeBox.value = ''; mensajeBox.blur;

};

function validarCampo() {
    // validacio por campo
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    // se valida la longitud del texto y que no este vacío
    if(validarLongitud(this)) {
        estadoCampo(this, true);
        if(validarLongitud(emailBox) &&
            validarLongitud(asuntoBox) &&
            validarLongitud(mensajeBox)) {
                if(errores === 0) {
                btnEnviar.disabled = false;
                };
        };
    } else {
        estadoCampo(this, false);
        btnEnviar.disabled = true;
    };
    
};


function estadoCampo(campo, estado) {
    if(estado) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    };
};

function validarLongitud(campo) {
    if(campo.value.length > 0) {
        return true;
    } else {
        return false;
    };
}

function validarEmail(imput) {

};