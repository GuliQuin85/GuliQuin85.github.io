
window.addEventListener('load', iniciar, false);

function iniciar() {      
  var imagen = document.getElementById('linkedin'), original = imagen.src;
  
    imagen.addEventListener('mouseover', function(){
        this.src = "imagenes/linkedin.png";
        this.srcset = "imagenes/linkedin.png 800w";
    }, false);
    imagen.addEventListener('mouseout', function(){
        this.src = original;
        this.srcset = "imagenes/Logo-LinkedIn-1.jpg 800w";
    }, false);
}