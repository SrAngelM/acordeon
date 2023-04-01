//Variable para selecciona el acordeon
const accordion = document.querySelectorAll(".content-container");

//Seleccionamos los elementos del acordeon, para luego cuando seleccionemos cada uno se agrege una clase "active"
accordion.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("active");
  });
});
