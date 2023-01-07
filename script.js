var btn_encrypt = document.querySelector(".encriptar");
var btn_dencrypt = document.querySelector(".desencriptar");
var btn_copy = document.querySelector(".btn-copy");
var campo_resultado = document.querySelector(".resultado");

function no_mensaje(){
    if(campo_resultado.value == ""){
        campo_resultado.style.display = "none";
        btn_copy.style.display = "none";
        document.querySelector(".no-mensaje").style.display = "flex";
    }
    else{
        campo_resultado.style.display = "flex";
        btn_copy.style.display = "flex";
        document.querySelector(".no-mensaje").style.display = "none";
    }
}

function encriptado(){
    campo_resultado.value = "";
    var texto = (document.querySelector(".encriptador").value).toLowerCase();
    var t = texto.split('');
    for (var i = 0; i<t.length;i++){
        if(t[i] == "a"){ 
            t.splice(i,1,"ai");
        }
        if(t[i] == "e"){
            t.splice(i,1,"enter");
        }
        if(t[i] == "i"){
            t.splice(i,1,"imes");
        }
        if(t[i] == "o"){
            t.splice(i,1,"ober");
        }
        if(t[i] == "u"){
            t.splice(i,1,"ufat");
        }
    }
    var resultado = t.join("");
    campo_resultado.value = resultado;
    no_mensaje();
    }

function desencriptado(){
    campo_resultado.value = "";
    var texto = (document.querySelector(".encriptador").value).toLowerCase();
    var t = texto.split('');
    for (var i = 0; i<t.length;i++){
        if(t[i] == "a" && t[i+1] == "i"){ 
            t.splice(i,2,"a");
        }
        if(t[i] == "e" && t[i+1] == "n" && t[i+2] == "t" && t[i+3] == "e" && t[i+4] == "r"){
            t.splice(i,5,"e");
        }
        if(t[i] == "i" && t[i+1] == "m" && t[i+2] == "e" && t[i+3] == "s") {
            t.splice(i,4,"i");
        }
        if(t[i] == "o" && t[i+1] == "b" && t[i+2] == "e" && t[i+3] == "r"){
            t.splice(i,4,"o");
        }
        if(t[i] == "u" && t[i+1] == "f" && t[i+2] == "a" && t[i+3] == "t"){
            t.splice(i,4,"u");
        }
    }
    var resultado = t.join("");
    campo_resultado.value = resultado;
    no_mensaje();
    }

function copiar(){
    var copiarTexto = campo_resultado.value;
    navigator.clipboard.writeText(copiarTexto);
}

no_mensaje();
btn_encrypt.onclick = encriptado;
btn_dencrypt.onclick = desencriptado;
btn_copy.onclick = copiar;

