setTimeout(function () {
    document.getElementById("publicidad").style.display = "block";
  }, 4000);
  
  document
    .getElementById("cerrarPublicidad")
    .addEventListener("click", function () {
      document.getElementById("publicidad").style.display = "none";
    });