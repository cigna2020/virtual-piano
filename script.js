const pianoBtn = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');


const audiSrc = './assets/audio/';

const playNote = (e, src) => {
  const audio = new Audio();
  audio.src = src + `${e.target.dataset.note}` + '.mp3';
  audio.currentTime = 0;
  audio.play();
}

pianoBtn.forEach(btn => {
  btn.addEventListener('mousedown', (e) => {
    startSound(e);
  });
})

const startSound = (e) => {
  e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
  playNote(e, audiSrc);
}

const stopSound = (e) => {
  e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
}

const startCorrespondOver = (e) => {
  if (e.target.classList.contains('piano-key')) {
    e.target.classList.add('piano-key-active', 'piano-key-active-pseudo')
  }

  pianoBtn.forEach(btn => {
    btn.addEventListener('mouseover', startSound);
    btn.addEventListener('mouseout', stopSound);
  });
}

const stopCorrespondOver = () => {
  pianoBtn.forEach(btn => {
    btn.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    btn.removeEventListener('mouseover', startSound);
    btn.removeEventListener('mouseout', stopSound);
  });
}

piano.addEventListener('mousedown', startCorrespondOver, false);
piano.addEventListener('mouseup', stopCorrespondOver);

const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes')

btnLetters.addEventListener('click', () => {
  btnLetters.classList.add('btn-active');
  btnNotes.classList.remove('btn-active');

  pianoBtn.forEach(btn => btn.classList.add('letter'));
});

btnNotes.addEventListener('click', () => {
  btnNotes.classList.add('btn-active');
  btnLetters.classList.remove('btn-active');

  pianoBtn.forEach(btn => btn.classList.remove('letter'));
});

const fullscreenBtn = document.querySelector('.fullscreen');



fullscreenBtn.addEventListener('click', () => {
  !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
})



const playKeyNote = (e) => {
  const audio = new Audio();
  let eCode = '';
  const code = e.code.split('')[3];

  if (code === 'D') {
    eCode = 'c';
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'D') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    })
  };
  if (code === 'F') {
    eCode = 'd';
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'F') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    })
  };
  if (code === 'G') {
    eCode = 'e';
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'G') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'H') {
    eCode = 'f'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'H') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'J') {
    eCode = 'g'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'J') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'K') {
    eCode = 'a'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'K') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'L') {
    eCode = 'b'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'L') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'R') {
    eCode = 'c♯'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'R') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'T') {
    eCode = 'd♯'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'T') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'U') {
    eCode = 'f♯'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'U') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'I') {
    eCode = 'g♯'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'I') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };
  if (code === 'O') {
    eCode = 'a♯'
    pianoBtn.forEach(btn => {
      if (btn.dataset.letter === 'O') btn.classList.add('piano-key-active', 'piano-key-active-pseudo')
    });
  };

  audio.src = audiSrc + eCode + '.mp3';
  audio.currentTime = 0;
  audio.play();
  e.repeat = false;
}

window.addEventListener('keydown', (e) => {
  if (e.code == "KeyD" || e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" || e.code == "KeyJ" || e.code == "KeyK" || e.code == "KeyL"
    || e.code == "KeyR" || e.code == "KeyT" || e.code == "KeyU" || e.code == "KeyI" || e.code == "KeyO") {

    !e.repeat ? playKeyNote(e) : null
  }
});

window.addEventListener('keyup', () => pianoBtn.forEach(btn => btn.classList.remove('piano-key-active', 'piano-key-active-pseudo')));




