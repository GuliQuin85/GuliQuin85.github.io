
document.getElementById("boton_atras").addEventListener("click", function () {
    console.log("Deshacer cambios");
    document.body.style.backgroundColor = "blue";
    document.getElementById("demo").innerHTML = "Aprendiendo JavaScript";
    document.getElementById("demo").style = "/*display = none*/";
});

