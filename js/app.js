const app = document.getElementById('app');
const homeBtn = document.getElementById('homeBtn');
const galleryBtn = document.getElementById('galleryBtn');

function showHome() {
  document.body.className = "";
  homeBtn.classList.add('active');
  galleryBtn.classList.remove('active');
  app.innerHTML = `
    <div class="side-strip left-strip"></div>
    <div class="side-strip right-strip"></div>
    <div class="hero">
      <h1 id="main-title">TE AMO PRINCIPESSA!!!</h1>
    </div>
    <div class="image-section">
      <img src="https://i.pinimg.com/736x/64/81/f8/6481f86f95d800a279fb529b2ebb859c.jpg" alt="Un ricordo dolce" class="framed-image" />
    </div>
    <div class="dedica">
      <p>
        For you my life💋.<br>
        T’amo mucho mi hermosa linda!! , espero que no se te olvide nunca.<br> 
        <br>Mill beshosss para TUUU!!!💋<br>
        T’amo❤‍🩹 y te amare cada secondo che pase, aunque estemos peleados xd.<br>
        Muchas grasias por todos los momentos bonito che estuviste a mi lado.<br>
        <br><br>
        T’amooo!!!❤‍🩹
      </p>
    </div>
    <div class="counter-section">
      <h2 class="counter-title">Te amo desde... y te seguiré amando cada segundo che pase...</h2>
      <table class="counter-table">
        <tr>
          <th>Años</th>
          <th>Meses</th>
          <th>Días</th>
          <th>Horas</th>
          <th>Minutos</th>
          <th>Segundos</th>
        </tr>
        <tr>
          <td id="years"><b>0</b></td>
          <td id="months"><b>0</b></td>
          <td id="days"><b>0</b></td>
          <td id="hours"><b>0</b></td>
          <td id="minutes"><b>0</b></td>
          <td id="seconds"><b>0</b></td>
        </tr>
      </table>
    </div>
    <div class="buttons">
      <a id="mi-felicidad" href="#">mi felicidad</a>
      <button id="mi-corazon">mi corazon</button>
    </div>
  `;
  // Counter
  const startDate = new Date("2024-08-22T00:00:00");
  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    let years = currentYear - startYear;
    let months = currentMonth - startMonth;
    let days = currentDay - startDay;
    if (days < 0) {
      months -= 1;
      const previousMonthDays = new Date(currentYear, currentMonth, 0).getDate();
      days += previousMonthDays;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("years").innerHTML = `<b>${years}</b>`;
    document.getElementById("months").innerHTML = `<b>${months}</b>`;
    document.getElementById("days").innerHTML = `<b>${days}</b>`;
    document.getElementById("hours").innerHTML = `<b>${hours}</b>`;
    document.getElementById("minutes").innerHTML = `<b>${minutes}</b>`;
    document.getElementById("seconds").innerHTML = `<b>${seconds}</b>`;
  }
  setInterval(updateCounter, 1000);
  updateCounter();
  // Cuori bendati
  const corazonBtn = document.getElementById("mi-corazon");
  corazonBtn.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
      const heart = document.createElement("div");
      heart.classList.add("emoji-heart");
      heart.innerHTML = "&#10084;&#65039;&#8205;&#129657;";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = Math.random() * window.innerHeight + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  });
  // Navigazione SPA per "mi felicidad"
  document.getElementById("mi-felicidad").onclick = (e) => {
    e.preventDefault();
    showGallery();
  };
}

function showGallery() {
  document.body.className = "felicidad-bg";
  homeBtn.classList.remove('active');
  galleryBtn.classList.add('active');
  app.innerHTML = `
    <h1 class="gallery-title">❤️ Mi Felicidad ❤️</h1>
    <div class="slideshow-container">
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/76TynJKs/Immagine-Whats-App-2025-04-21-ore-21-49-22-1849265a.jpg" alt="Momento 1"><div class="slide-caption">Il nostro primo sorriso insieme</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/8CYSvmmf/Immagine-Whats-App-2025-04-21-ore-21-49-22-010e45cb.jpg" alt="Momento 2"><div class="slide-caption">Un abbraccio che non dimentico</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/pdrvy6zt/Immagine-Whats-App-2025-04-21-ore-21-49-22-5fea5bdd.jpg" alt="Momento 3"><div class="slide-caption">Risate infinite</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/8zkWcZ4H/Immagine-Whats-App-2025-05-20-ore-19-10-30-0c4b7129.jpg" alt="Momento 4"><div class="slide-caption">Un giorno speciale</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/T2mn4Lhr/Immagine-Whats-App-2025-05-20-ore-19-10-30-aea71858.jpg" alt="Momento 5"><div class="slide-caption">Solo noi due</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/BnhFK2wG/Immagine-Whats-App-2025-05-20-ore-19-10-30-f665d47d.jpg" alt="Momento 6"><div class="slide-caption">Momenti indimenticabili</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/5NJM80Lg/Immagine-Whats-App-2025-04-21-ore-21-49-22-add03c87.jpg" alt="Momento 7"><div class="slide-caption">Il tuo sorriso, la mia felicità</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/hP0RsB0B/Immagine-Whats-App-2025-04-21-ore-21-49-22-c9288595.jpg" alt="Momento 8"><div class="slide-caption">Sempre insieme</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/HLrGT71Y/Immagine-Whats-App-2025-04-21-ore-21-49-22-d63de8c4.jpg" alt="Momento 9"><div class="slide-caption">Un altro ricordo</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/5NV8d4FD/Immagine-Whats-App-2025-05-20-ore-19-10-30-9e3356ea.jpg" alt="Momento 10"><div class="slide-caption">Giornate felici</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/htyWF1wZ/Immagine-Whats-App-2025-04-21-ore-21-56-43-2033a28c.jpg" alt="Momento 11"><div class="slide-caption">Ti amo ogni giorno di più</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/5tThyNfw/Immagine-Whats-App-2025-04-21-ore-21-56-43-ef91cceb.jpg" alt="Momento 12"><div class="slide-caption">Il nostro viaggio</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/QCrvg49C/Immagine-Whats-App-2025-04-21-ore-21-56-43-f6ecc7fb.jpg" alt="Momento 13"><div class="slide-caption">Sempre nel mio cuore</div></div>
      <div class="slide"><img class="slide-image" src="https://i.postimg.cc/TYJgTzV1/Immagine-Whats-App-2025-05-20-ore-19-10-30-f00a8eb3.jpg" alt="Momento 14"><div class="slide-caption">Per sempre noi</div></div>
    </div>
    <div class="slideshow-controls">
      <button id="prevSlide" title="Precedente">&#8592;</button>
      <button id="pauseSlide" title="Pausa">&#10073;&#10073;</button>
      <button id="nextSlide" title="Successiva">&#8594;</button>
    </div>
  `;
  // Slideshow JS
  let slideIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let playing = true;
  let slideTimer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.remove('active');
      if (i === idx) s.classList.add('active');
    });
  }
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }
  function playSlides() {
    playing = true;
    slideTimer = setInterval(nextSlide, 3000);
  }
  function pauseSlides() {
    playing = false;
    clearInterval(slideTimer);
  }
  document.getElementById('nextSlide').onclick = () => {
    nextSlide();
    if (playing) { pauseSlides(); playSlides(); }
  };
  document.getElementById('prevSlide').onclick = () => {
    prevSlide();
    if (playing) { pauseSlides(); playSlides(); }
  };
  document.getElementById('pauseSlide').onclick = () => {
    if (playing) {
      pauseSlides();
      document.getElementById('pauseSlide').innerHTML = "&#9654;";
    } else {
      playSlides();
      document.getElementById('pauseSlide').innerHTML = "&#10073;&#10073;";
    }
  };
  showSlide(slideIndex);
  playSlides();
}

// Cuoricini che cadono sempre
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'falling-heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

// Musica Play/Pausa
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  if (audio.paused) audio.play();
  else audio.pause();
}

// SPA navigation
homeBtn.onclick = showHome;
galleryBtn.onclick = showGallery;

// Avvio Home all'apertura
showHome();