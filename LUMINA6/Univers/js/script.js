// script.js – LU●MINA6 Universe Interactivity

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    themeToggle.textContent = body.classList.contains('light') ? '☀️ Switch Theme' : '🌙 Switch Theme';
  });

  const audio = document.getElementById('audio-player');
  const planets = document.querySelectorAll('.planet');
  const loreCard = document.getElementById('lore-card');
  const loreName = document.getElementById('lore-name');
  const loreText = document.getElementById('lore-text');

  const loreData = {
    Sky: {
      name: "SKY: ETHER CORE",
      text: "You are the dreamplane, the memory carrier. You speak softly, but people orbit your presence. Symbol: 🜁"
    },
    Jiho: {
      name: "JIHO: EARTH CORE",
      text: "You choose your gravity. Calm, grounded, defiant. A rock others lean on. Symbol: 🜃"
    },
    Leo: {
      name: "LEO: FLAME CORE",
      text: "You burn bright. Rebellious, loud, loyal. You light your own stage. Symbol: 🜂"
    },
    Haruka: {
      name: "HARUKA: ICE CORE",
      text: "Still waters reflect the most. You’re composed, observant, poetic. Symbol: 🜄"
    },
    Xiao: {
      name: "XIAO: MIRROR CORE",
      text: "You reflect others deeply. Dual, complex, emotional. Truth is in your silence. Symbol: 🪞"
    },
    Nirin: {
      name: "NIRIN: FLARE CORE",
      text: "You are light incarnate. Empathy, color, and voice. You hold others together. Symbol: 🌈"
    }
  };

  planets.forEach(planet => {
    planet.addEventListener('click', () => {
      const member = planet.dataset.member;
      const audioFile = 'assets/audio/' + planet.dataset.audio;
      audio.src = audioFile;
      audio.play();

      loreName.textContent = loreData[member].name;
      loreText.textContent = loreData[member].text;
      loreCard.classList.add('show');
    });
  });

  // Symbol key toggle
  const symbolToggle = document.getElementById('symbol-toggle');
  const symbolKey = document.getElementById('symbol-key');
  symbolToggle.addEventListener('click', () => {
    symbolKey.classList.toggle('show');
  });
});

function closeLore() {
  document.getElementById('lore-card').classList.remove('show');
}

