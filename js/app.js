// VARIABLES GLOBARLES
const emailBox = document.getElementById('email');
const asuntoBox = document.getElementById('asunto');
const mensajeBox = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formulario = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

// EVENTLISTENER
eventListener();

function eventListener() {
    // Inicio de la app
    document.addEventListener('DOMContentLoaded', inicioForm);

    // Validar campos cargados
    emailBox.addEventListener('blur', validarCampo)
    asuntoBox.addEventListener('blur', validarCampo)
    mensajeBox.addEventListener('blur', validarCampo)

    // Boton enviar
    btnEnviar.addEventListener('click', enviarEmail);

    btnReset.addEventListener('click', function(e) {e.preventDefault(); formulario.reset()});
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
                if(errores.length === 0) {
                    btnEnviar.disabled = false;
                } else {
                    btnEnviar.disabled = true;
                };
        } else {
            btnEnviar.disabled = true;
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

function validarEmail(campo) {
    if(campo.value.indexOf('@') !== -1) {
        estadoCampo(campo, true);
    } else {
        estadoCampo(campo, false);
    };
};

function enviarEmail(e) {
    e.preventDefault();
    // aparecer spinner
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif de enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado)
        setTimeout(function() {
            enviado.remove();
            formulario.reset();
        }, 2000);
    },3000);

}