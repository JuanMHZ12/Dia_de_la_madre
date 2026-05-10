const showPhotoBtn = document.getElementById("showPhotoBtn");
const message1Btn = document.getElementById("message1Btn");
const message2Btn = document.getElementById("message2Btn");
const message3Btn = document.getElementById("message3Btn");
const musicToggleBtn = document.getElementById("musicToggleBtn");

const photoSection = document.getElementById("photoSection");
const messageBox = document.getElementById("messageBox");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

const bgMusic = document.getElementById("bgMusic");

showPhotoBtn.addEventListener("click", () => {
  photoSection.classList.toggle("hidden");
});

message1Btn.addEventListener("click", () => {
  messageBox.classList.remove("hidden");
  messageTitle.textContent = "Un mensaje para ti";
  messageText.textContent =
    "Mamita, gracias por cada sacrificio, por cada consejo y por cada momento en el que me diste tu apoyo sin pedir nada a cambio. Tu amor ha sido uno de los regalos más grandes de mi vida.";
});

message2Btn.addEventListener("click", () => {
  messageBox.classList.remove("hidden");
  messageTitle.textContent = "Lo que admiro de ti";
  messageText.textContent =
    "Admiro tu fortaleza, tu ternura, tu manera de seguir adelante y el cariño con el que haces todo. Eres una mujer valiosa, admirable y digna de todo mi respeto y amor.";
});

message3Btn.addEventListener("click", () => {
  messageBox.classList.remove("hidden");
  messageTitle.textContent = "Lo que quiero decirte hoy";
  messageText.textContent =
    "Hoy quiero que sepas que te quiero muchísimo, que agradezco tenerte en mi vida y que deseo de corazón que siempre estés rodeada de amor, paz y felicidad. Feliz Día de la Madre.";
});

/* Intenta reproducir la música al cargar.
   En algunos navegadores no se permite autoplay con sonido
   hasta que el usuario interactúe. */
window.addEventListener("load", async () => {
  bgMusic.volume = 0.5;

  try {
    await bgMusic.play();
    bgMusic.muted = false;
    musicToggleBtn.textContent = "🔊";
  } catch (error) {
    bgMusic.muted = true;
    musicToggleBtn.textContent = "🔇";
  }
});

musicToggleBtn.addEventListener("click", async () => {
  try {
    if (bgMusic.paused) {
      await bgMusic.play();
    }

    bgMusic.muted = !bgMusic.muted;
    musicToggleBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
  } catch (error) {
    console.log("No se pudo controlar la música:", error);
  }
});