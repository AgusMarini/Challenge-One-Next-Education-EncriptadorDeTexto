function encriptar() {
    var texto = document.getElementById("texto1").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm, "enter");
    textoCifrado = textoCifrado.replace(/o/igm, "ober");
    textoCifrado = textoCifrado.replace(/i/igm, "imes");
    textoCifrado = textoCifrado.replace(/a/igm, "ai");
    textoCifrado = textoCifrado.replace(/u/igm, "ufats");
  
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "block";
  }
  
  function desencriptar() {
    var texto = document.getElementById("texto1").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm, "e");
    textoCifrado = textoCifrado.replace(/ober/igm, "o");
    textoCifrado = textoCifrado.replace(/imes/igm, "i");
    textoCifrado = textoCifrado.replace(/ai/igm, "a");
    textoCifrado = textoCifrado.replace(/ufats/igm, "u");
  
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "block";
  }
  
  function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se ha copiado el texto cifrado/descifrado al portapapeles!");
  }
  
