const toggleBTN = document.getElementsByClassName("responsywna_lista")[0];
const links = document.getElementsByClassName("links")[0];

toggleBTN.addEventListener("click", () => {
  links.classList.toggle("active");
});
