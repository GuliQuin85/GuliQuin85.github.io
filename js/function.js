
document.getElementById("boton_atras").addEventListener("click", function () {
    console.log("Deshacer cambios");
    document.body.style.backgroundColor = "blue";
    document.getElementById("demo").innerHTML = "Aprendiendo JavaScript";
    document.getElementById("demo").style = "/*display = none*/";
});

window.addEventListener('load', iniciar, false);

function iniciar() {      
  var imagen = document.getElementById('linkedin'), original = imagen.src;
  
  imagen.addEventListener('mouseover', function(){
      this.src = "imagenes/linkedin.png";
  }, false);
  imagen.addEventListener('mouseout', function(){
      this.src = original;
  }, false);
}