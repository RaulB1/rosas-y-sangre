// BEST VIEWED IN FULL-SCREEN ON CHROME / SAFARI
// Poema gótico para mi vampirita — versos en bucle sobre el corazón low-poly.

(function () {
  var TITULO = 'Sangre y Rosas';
  var PIE = 'Para ti, por siempre';

  // Estrofas originales. Cada una dura unos segundos y se desvanece.
  var estrofas = [
    'En la noche más larga del mundo\nmi corazón aprendió tu nombre\ny desde entonces late en tinieblas\nsólo para llamarte.',
    'Que se apaguen todos los candelabros,\nque se rinda la luna en su ventana:\ntu mirada basta para incendiar\nlas catedrales de mi alma.',
    'Soy un jardín de rosas negras\nque florece únicamente a tu paso;\ntus manos son la primavera\nque el invierno no se atrevió a nombrar.',
    'Si el tiempo es un reloj sin manecillas,\nyo prefiero perderme en tu silencio:\nahí la eternidad no pesa\ny el miedo se hace sombra mansa.',
    'Y cuando el último cuervo\nse duerma sobre la torre,\nme encontrarás aquí, mi vampirita,\ncon el corazón abierto y encendido.',
    'No temo a la oscuridad,\nporque en ella brillas tú.\nTe amo como se aman las cosas eternas:\nen silencio, y para siempre.'
  ];

  var elTitulo = document.getElementById('titulo');
  var elVerso = document.getElementById('verso');
  var elPie = document.getElementById('pie');
  var elEmbers = document.getElementById('embers');

  elTitulo.textContent = TITULO;
  elPie.textContent = PIE;

  // Brasas que suben (se generan una sola vez)
  var N = window.innerWidth < 600 ? 18 : 34;
  for (var i = 0; i < N; i++) {
    var e = document.createElement('span');
    e.className = 'ember';
    e.style.left = (Math.random() * 100) + 'vw';
    e.style.animationDuration = (6 + Math.random() * 9) + 's';
    e.style.animationDelay = (Math.random() * 10) + 's';
    e.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    elEmbers.appendChild(e);
  }

  // El corazón termina de dibujarse a los ~5s; el poema entra después.
  var INICIO = 5000;
  var VISIBLE = 6500;
  var PAUSA = 1900;
  var idx = 0;

  function mostrar() {
    elVerso.textContent = estrofas[idx];
    elVerso.classList.add('visible');
    setTimeout(function () {
      elVerso.classList.remove('visible');
      idx = (idx + 1) % estrofas.length;
      setTimeout(mostrar, PAUSA);
    }, VISIBLE);
  }

  setTimeout(function () {
    elTitulo.classList.add('visible');
    elPie.classList.add('visible');
    setTimeout(mostrar, 1200);
  }, INICIO);
})();
