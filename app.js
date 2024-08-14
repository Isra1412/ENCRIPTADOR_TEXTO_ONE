const textoAEncriptar = document.getElementById('idTextoUsuario');
const btEncriptar = document.getElementById('btnEncriptar');
const btDesencriptar = document.getElementById('btnDesencriptar');
const textoSalida = document.getElementById('idTituloSinResultado');
const imagenSalida = document.getElementById('idImagenSinResultado');
const btCopiar = document.getElementById('btnCopiar');
const textOcultarSalida = document.getElementById('idMensajeSinResultado');
const textoResultado = document.getElementById('idMensajeResultado');
const mainSalida = document.getElementById('idResultado');

const paraEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const paraDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};


function encriptarTexto() {
    const textoOriginal = textoAEncriptar.value.toLowerCase();
    if (textoOriginal.length > 0) {
        let textoEncriptado = '';
        for (let caracter of textoOriginal) {
            if (paraEncriptar.hasOwnProperty(caracter)) {
                textoEncriptado += paraEncriptar[caracter];
            } else {
                textoEncriptado += caracter;
            }
        }
        imagenSalida.style.display = "none";
        textOcultarSalida.style.display = "none";
        btCopiar.style.display = "block";
        textoResultado.innerText = textoEncriptado;
        textoResultado.style.display = "block"
        mainSalida.style.justifyContent = "space-between"
    } else {
        imagenSalida.style.display = '';
        textOcultarSalida.style.display = '';
        textoSalida.style.display = '';
        btCopiar.style.display = 'none';
        textoResultado.style.display = 'none';
    }
    if (isResponsive()) {
        scrollToBottom();
    }
}

function desencriptar() {
    let texto = textoAEncriptar.value.toLowerCase();
    if(texto.length>0){
        for (let clave in paraDesencriptar) {
            if (texto.includes(clave)) {
                texto = texto.replaceAll(clave, paraDesencriptar[clave]);
            }
        }
        imagenSalida.style.display = "none";
        textOcultarSalida.style.display = "none";
        textoSalida.style.display = "none";
        btCopiar.style.display = "block";
        textoResultado.innerText = texto;
        textoResultado.style.fontWeight = '';
        textoResultado.style.textAlign = "left";
    } else {
        imagenSalida.style.display = '';
        textOcultarSalida.style.display = '';
        textoSalida.style.display = '';
        btCopiar.style.display = 'none';
    }
    if (isResponsive()) {
        scrollToBottom();
    }
}


function copiarTexto() {
    let textoCopiado = textoResultado.innerText;
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