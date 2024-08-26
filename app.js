const textoAEncriptar = document.getElementById('idTextoUsuario');
const btEncriptar = document.getElementById('btnEncriptar');
const btDesencriptar = document.getElementById('btnDesencriptar');
const tituloSinResultado = document.getElementById('idTituloSinResultado');
const imagenSalida = document.getElementById('idImagenSinResultado');
const btCopiar = document.getElementById('btnCopiar');
const mensajeSinResultado = document.getElementById('idMensajeSinResultado');
const textoProcesado = document.getElementById('idTextoProcesado');
const contenedorResultado = document.getElementById('idContenedorResultado');
const mensajeError = document.getElementById('idMensajeError');

const llavesParaEncriptar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const llavesParaDesencriptar = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function revision(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8 || tecla == 32) {
        return true;
    }
    patron = /[a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


function encriptarTexto() {
    const textoOriginal = textoAEncriptar.value.toLowerCase();
    if (textoOriginal.length > 0) {
        let textoEncriptado = '';
        for (let caracter of textoOriginal) {
            if (llavesParaEncriptar.hasOwnProperty(caracter)) {
                textoEncriptado += llavesParaEncriptar[caracter];
            } else {
                textoEncriptado += caracter;
            }
        }
        imagenSalida.style.display = "none";
        mensajeSinResultado.style.display = "none";
        tituloSinResultado.style.display = "none";
        btCopiar.style.display = "block";
        textoProcesado.innerText = textoEncriptado;
        textoProcesado.style.display = "block"
        contenedorResultado.style.justifyContent = "space-between"
    } else {
        imagenSalida.style.display = '';
        mensajeSinResultado.style.display = '';
        tituloSinResultado.style.display = '';
        btCopiar.style.display = 'none';
        textoProcesado.style.display = 'none';
    }
    if (isResponsive()) {
        scrollToBottom();
    }
}

function desencriptar() {
    let texto = textoAEncriptar.value.toLowerCase();
    if(texto.length>0){
        for (let clave in llavesParaDesencriptar) {
            if (texto.includes(clave)) {
                texto = texto.replaceAll(clave, llavesParaDesencriptar[clave]);
            }
        }
        imagenSalida.style.display = "none";
        mensajeSinResultado.style.display = "none";
        tituloSinResultado.style.display = "none";
        btCopiar.style.display = "block";
        textoProcesado.innerText = texto;
        textoProcesado.style.fontWeight = '';
        textoProcesado.style.textAlign = "left";
    } else {
        imagenSalida.style.display = '';
        mensajeSinResultado.style.display = '';
        tituloSinResultado.style.display = '';
        btCopiar.style.display = 'none';
    }
    if (isResponsive()) {
        scrollToBottom();
    }
}


function copiarTexto() {
    let textoCopiado = textoProcesado.innerText;
    navigator.clipboard.writeText(textoCopiado);
    mostrarMensaje();
}

function mostrarMensaje() {
    const mensaje = document.getElementById('mensajeTemporal');
    mensaje.classList.add('mostrar');

    setTimeout(() => {
        mensaje.classList.remove('mostrar');
    }, 3000);
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function isResponsive() {
    return window.matchMedia("(max-width: 768px)" || "(max-width: 336px)").matches;
}