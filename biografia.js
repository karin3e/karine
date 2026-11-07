const musica = document.getElementById("musica");
const somBtn = document.getElementById("somBtn");

somBtn.addEventListener("click", () => {
  if (musica.muted) {
    musica.muted = false;
    somBtn.textContent = "Pausar Som 🔇";
  } else {
    musica.muted = true;
    somBtn.textContent = "Ativar Som 🔊";
  }
});