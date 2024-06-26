class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    let questionEl = document.getElementById("question");
    questionEl.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceEl = document.getElementById("choice" + i);
      choiceEl.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

// GUESS ANSWER
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

function showProgress() {
  let currentQuestion = quiz.questionIndex + 1;
  let progressEl = document.getElementById("progress");
  progressEl.innerHTML = `Question ${currentQuestion} of ${quiz.questions.length}`;
}

function showScores() {
  let quizEndHTML = `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
  let quizEl = document.getElementById("quiz");
  quizEl.innerHTML = quizEndHTML;
}

let questions = [
  new Question(
    "Hyper Text Markup Language Stands For?",
    ["JQuery", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "Cascading Style sheet stands for?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is a JavaScript Framework?",
    ["React", "Laravel", "Django", "Sass"],
    "React"
  ),
  new Question(
    "Which is a backend language?",
    ["PHP", "HTML", "React", "All"],
    "PHP"
  ),
  new Question(
    "Which is best for Artificial intelligence?",
    ["React", "Laravel", "Python", "Sass"],
    "Python"
  ),
];

let quiz = new Quiz(questions);

displayQuestion();

// ADD A COUNTDOWN
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
