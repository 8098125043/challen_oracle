function encrip(){
    var texto = document.getElementById("textentra").value.toLowerCase();

    
    var txtCif =texto.replace(/e/gi,"enter");
    var txtCif =texto.replace(/i/gi,"imes");
    var txtCif =texto.replace(/a/gi,"ait");
    var txtCif =texto.replace(/o/gi,"ober");
    var txtCif =texto.replace(/u/gi,"ufat");

    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textonum2").innerHTML=txtCif; 
    alert("texto encriptado");  
  

}

//Boton desencriptar.
function desencrip(){
    var texto = document.getElementById("textentra").value.toLowerCase();
    var txtCif =texto.replace(/enter/igm,"e");
    var txtCif =texto.replace(/ober/igm,"o");
    var txtCif =texto.replace(/imes/igm,"i");
    var txtCif =texto.replace(/ait/igm,"a");
    var txtCif =texto.replace(/ufat/igm,"u");
   

 

    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textonum2").innerHTML=txtCif ;   
   
   

}