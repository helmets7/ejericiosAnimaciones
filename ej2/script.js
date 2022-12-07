const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");

imagen2.addEventListener("click", () => {
  imagen2.style.transition = "all 1s ease";
  imagen2.style.filter = "opacity(0%)";
});
