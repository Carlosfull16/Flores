// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24.42 },
  { text: "Y el amarillo del sol iluminaba la esquina (la esquina)", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39.48 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 45 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 48.50 },
  { text: "No te apures no detengas, el instante del encuentro", time: 58.50 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 59.50 },
  { text: "No te olvides, que la vida", time: 67.76 },
  { text: "Casi nunca está dormida", time: 70.59 },
  { text: "En ese bar tan desierto los esperaba el encuentro (el encuentro)", time: 92.52 },
  { text: "Ella llegó en limosina amarilla por supuesto", time: 100.68 },
  { text: "Él se acercó de repente y la miró tan de frente (de frente)", time: 108.48 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116.36 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 122.63 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 127.94 },
  { text: "No te apures no detengas, el instante del encuentro", time: 134.64 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 139.67 },
  { text: "No te olvides, que la vida", time: 144.45 },
  { text: "Casi nunca está dormida", time: 147.69 },
  { text: "(Flores amarillas)", time: 162.08 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 169.23 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 173.66 },
  { text: "No te apures no detengas, el instante del encuentro", time: 180.60 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 185.47 },
  { text: "No te olvides, que la vida", time: 189.48 },
  { text: "Casi nunca está dormida", time: 193.31 },
  { text: "Ella sabía que él sabía", time: 198.87 },
  { text: "Él sabía, ella sabia", time: 201.40 },
  { text: "Él sabía, ella sabía y se olvidaron, de sus flores amarillas", time: 203.35 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);