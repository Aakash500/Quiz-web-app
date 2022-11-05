// variable declaration starts
'use strict';

const id = val => document.getElementById(val);
const classes = val => document.getElementsByClassName(val);
let scores = 0;
const main = classes('land-content')[0];
const startButton = id('btn-start');
const timer = id('timer');
let i = 25;

//variable declaration ends

// questions starts
const questions = [
  {
    question: 'JavaScript is a ______',
    options: [
      'Synchronous and single threaded',
      'Synchronous and muti-threaded',
      'Asynchronous and single threaded',
      'Asynchronous and multi-threaded',
    ],
    correct: 0,
  },
  {
    question: 'When to start learning react ______',
    options: [
      'After learning HTML CSS and JS',
      'Synchronous and muti-threaded',
      'Asynchronous and single threaded',
      'Asynchronous and multi-threaded',
    ],
    correct: 1,
  },
  {
    question: 'Frontend Developer skills are ______',
    options: [
      'HTML CSS JS and React',
      'Synchronous and muti-threaded',
      'Asynchronous and single threaded',
      'Asynchronous and multi-threaded',
    ],
    correct: 2,
  },
];
//questions end

let createQuestions = idx => {
  let qt = document.createElement('h4');
  qt.textContent = `${idx+1}. ${questions[idx].question}`;
  main.appendChild(qt);
};

let createOptions = idx => {
  questions[idx].options.forEach(text => {
    let li = document.createElement('li');
    li.className = 'choice';
    li.textContent = text;
    main.appendChild(li);
  });
};

let whichOptionSelected = (q, selected) => {
 
  return new Promise(function (resolve, reject) {
    let res = questions[q].correct;
    for (let idx = 0; idx < selected.length; idx++) {
      selected[idx].addEventListener('click', () => {
        let ans;
        if (idx === res) ans = true;
        else ans = false;
        resolve(ans);
      });
    }
  });
};

const checkResponse = goBack => {
  return new Promise(function (resolve, reject) {
    goBack.addEventListener('click', () => {
      resolve();
    });
  });
};


const scoresDisplay = () =>{
  main.innerHTML = ' ';
  main.style.maxWidth = "250px";
  timer.textContent = ' ';
  let show = document.createElement('P');
  show.textContent = `Total questions ${questions.length} correctly answered ${scores} 
  and wrong attempts are ${questions.length - scores} `;
  main.appendChild(show);
}

async function backOnFirstPage() {
  let goBack = document.createElement('button');
  goBack.textContent = 'Go back';
  main.appendChild(goBack);
  await checkResponse(goBack);
  console.log('gotit');
  window.location.href = 'index.html';
}

async function middle(q) {
  if (q === questions.length || i <= 0) {
    i=-1;
    scoresDisplay();
    backOnFirstPage();
    return;
  }
  console.log(q);

  createQuestions(q);
  createOptions(q);

  let selected = document.getElementsByClassName('choice');
  let status;

  await whichOptionSelected(q, selected).then(e => {
    status = e;
  });

  let show = document.createElement('P');

  if (!status) {
    i = i - 10;
    show.textContent = 'Incorrect';
  } else {
    show.textContent = 'Correct';
    scores++;
  }
  //   show.appendChild(main); heavy error man
  setTimeout(() => {
    main.innerHTML = ' ';
    middle(q + 1);
  }, 500);

  main.appendChild(show);
  return 0;
}

let start = ()=>{
  startButton.addEventListener('click', () => {
    main.innerHTML = '';
    let intervalID = setInterval(() => {
      if (i >= 0) {
        timer.textContent = `${i}`;
        i--;
      } else {
        clearInterval(intervalID);
        intervalID = null;
        scoresDisplay();
        backOnFirstPage();
      }
    }, 1000);

    middle(0);
  });
}

start();

