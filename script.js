const textArea = document.querySelector(".area__texto");
const salida = document.querySelector(".texto__salida");
var texto1 = document.querySelector(".texto1");
var texto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".btn__copiar");

/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    salida.value = textoEncriptado;
    textArea.value = "";
    salida.style.backgroundImage = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
    btnCopiar.style.display = "";
}


function encriptar(stringEncriptada){
    let listaEncriptacion = [["e", "enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < listaEncriptacion.length; i++)
    {
        if (stringEncriptada.includes(listaEncriptacion [i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(listaEncriptacion[i][0], listaEncriptacion[i][1]);
        }
    }
    return stringEncriptada;
    textArea.value = "";
    salida.value = salida;
    ocultar();
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    salida.value = textoEncriptado;
    textArea.value = "";
    salida.style.backgroundImage = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
    btnCopiar.style.display = "";
}

function desencriptar(stringDesencriptada){
    let listaEncriptacion = [["e", "enter"], ["i","imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < listaEncriptacion.length; i++)
    {
        if (stringDesencriptada.includes(listaEncriptacion [i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(listaEncriptacion[i][1], listaEncriptacion[i][0]);
        }
    }
    return stringDesencriptada;
    textArea.value = "";
    salida.value = salida;
    ocultar();
}
function ocultar(){
    salida.style.background = "white";
    texto1.style.display = "none";
    texto2.style.display = "none";
    btnCopiar.style.display = "";
}
function mostrar(){
    salida.style.background = "#FFF no-repeat center url(./images/Muñeco.png)";
    texto1.style.display = "";
    texto2.style.display = "";
    btnCopiar.style.display = "none";
}
function copiar(){
    var copia =salida.value;
    navigator.clipboard.writeText(copia);    
    var textoCopiado = document.querySelector(".mensaje__copiado");
    textoCopiado.textContent = "Texto copiado";
    textoCopiado.style.display = "block";
    setTimeout(() => {
        textoCopiado.style.display = "none";
        salida.value = "";
        btnCopiar.style.display = "";
        mostrar();
    }, 950);
}