const questions = [
  {
      question: "Сколько дней в неделю?",
      optionA: "10 дней",
      optionB: "14 дней",
      optionC: "5 дней",
      optionD: "7 дней",
      correctOption: "optionD"
  },

  {
      question: "Сколько игроков может находиться на футбольном поле?",
      optionA: "10 игроков",
      optionB: "11 игроков",
      optionC: "9 игроков",
      optionD: "12 игроков",
      correctOption: "optionB"
  },

  {
      question: "Кто был первым президентом США?",
      optionA: "Дональд Трамп",
      optionB: "Барак Обама",
      optionC: "Авраам Линкольн",
      optionD: "Джордж Вашингтон",
      correctOption: "optionD"
  },

  {
      question: "30 дней имеет ______ ?",
      optionA: "Январь",
      optionB: "Декабрь",
      optionC: "Июнь",
      optionD: "Август",
      correctOption: "optionC"
  },

  {
      question: "Сколько часов в сутках?",
      optionA: "30 часов",
      optionB: "38 часов",
      optionC: "48 часов",
      optionD: "24 часа",
      correctOption: "optionD"
  },

  {
      question: "Какая река является самой длинной в мире?",
      optionA: "Река Нил",
      optionB: "Длинная река",
      optionC: "Хуанхэ",
      optionD: "Конго",
      correctOption: "optionA"
  },

  {
      question: "_____ это самый жаркий континент на Земле?",
      optionA: "Океания",
      optionB: "Антарктида",
      optionC: "Африка",
      optionD: "Северная Америка",
      correctOption: "optionC"
  },

  {
      question: "Какая страна является самой большой в мире?",
      optionA: "Россия",
      optionB: "Канада",
      optionC: "Африка",
      optionD: "Египет",
      correctOption: "optionA"
  },

  {
      question: "Какое из этих чисел является нечетным?",
      optionA: "10",
      optionB: "12",
      optionC: "8",
      optionD: "7",
      correctOption: "optionD"
  },

  {
      question: "Самый богатый человек в мире  по состоянию на 2024 год?",
      optionA: "Джефф Безос",
      optionB: "Билл Гейтс",
      optionC: "Сергей Брин",
      optionD: "Илон Маск",
      correctOption: "optionD"
  },

  {
      question: "Где находится самое высокое здание в мире?",
      optionA: "Африка",
      optionB: "Калифорния",
      optionC: "Дубай",
      optionD: "Италия",
      correctOption: "optionC"
  },

  {
      question: "Самая длинная река в Соединенном Королевстве - это ?",
      optionA: "Река Северн",
      optionB: "Река Мерси",
      optionC: "Река Трент",
      optionD: "Река Твид",
      correctOption: "optionA"
  },


  {
      question: "Сколько постоянных зубов у собаки?",
      optionA: "38",
      optionB: "42",
      optionC: "40",
      optionD: "36",
      correctOption: "optionB"
  },

  {
      question: "Какая национальная сборная выиграла чемпионат мира по футболу в 2018 году?",
      optionA: "Англия",
      optionB: "Бразилия",
      optionC: "Германия",
      optionD: "Франция",
      correctOption: "optionD"
  },

  {
      question: "В каком городе родился В.В.Путин",
      optionA: "Санкт-Петербург",
      optionB: "Белгород",
      optionC: "Москва",
      optionD: "Нижний Новгород",
      correctOption: "optionA"
  },

  {
      question: "Сколько штатов насчитывает Нигерия?",
      optionA: "24",
      optionB: "30",
      optionC: "36",
      optionD: "37",
      correctOption: "optionC"
  },

  {
      question: "____ это столица Нигерии?",
      optionA: "Абуджа",
      optionB: "Лагос",
      optionC: "Калабар",
      optionD: "Кано",
      correctOption: "optionA"
  },

  {
      question: "Лос-Анджелес также известен как?",
      optionA: "Город Анджелес",
      optionB: "Сияющий город",
      optionC: "Город ангелов",
      optionD: "Потерянные Ангелы",
      correctOption: "optionC"
  },

  {
      question: "Какой город является столицей Германии?",
      optionA: "Грузия",
      optionB: "Миссури",
      optionC: "Оклахома",
      optionD: "Берлин",
      correctOption: "optionD"
  },

  {
      question: "Сколько сторон у шестиугольника?",
      optionA: "6",
      optionB: "7",
      optionC: "4",
      optionD: "5",
      correctOption: "optionA"
  },

  {
      question: "Сколько планет в настоящее время находится в Солнечной системе?",
      optionA: "11",
      optionB: "7",
      optionC: "9",
      optionD: "8",
      correctOption: "optionD"
  },

  {
      question: "Какая планета самая жаркая?",
      optionA: "Юпитер",
      optionB: "Меркурий",
      optionC: "Земля",
      optionD: "Венера",
      correctOption: "optionB"
  },

  {
      question: "Где находится самая маленькая косточка в человеческом теле?",
      optionA: "Пальцы ног",
      optionB: "Уши",
      optionC: "Пальцы",
      optionD: "Нос",
      correctOption: "optionB"
  },

  {
      question: "Сколько сердец у осьминога?",
      optionA: "1",
      optionB: "2",
      optionC: "3",
      optionD: "4",
      correctOption: "optionC"
  },

  {
      question: "Сколько зубов у взрослого человека?",
      optionA: "28",
      optionB: "30",
      optionC: "32",
      optionD: "36",
      correctOption: "optionC"
  }

]


let shuffledQuestions = []

function handleQuestions() { 
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]
  const currentQuestionAnswer = currentQuestion.correctOption 
  const options = document.getElementsByName("option");
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          correctOption = option.labels[0].id
      }
  })

  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ 
          indexNumber++
          setTimeout(() => {
              questionNumber++
          }, 100)
      }
  })
}



function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  setTimeout(() => {
      if (indexNumber <= 9) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

function handleEndGame() {
  let remark = null
  let remarkColor = null

  if (playerScore <= 3) {
      remark = "Плохая оценка, Продолжай практиковаться."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Средняя оценка, ты можешь добиться большего."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Отлично, продолжайте в том же духе."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}


const button = document.getElementById('snow');
const image = document.getElementById('gif-overlay');

button.addEventListener('click', () => {
  image.classList.toggle('visible');
});