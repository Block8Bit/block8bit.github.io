const startDate = new Date("2023-09-09T22:13:00");
const birthDateLuiz = new Date("1997-12-27T02:40:00");
const birthDateLucas = new Date("2004-05-04T00:36:00");

function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}

function updateCountup() {
  const now = new Date();
  const diff = now - startDate;

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    days += new Date(
      prevMonth.getFullYear(),
      prevMonth.getMonth() + 1,
      0
    ).getDate();
    months--;
  }

  const totalMilliseconds =
    now - new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seconds = Math.floor(totalMilliseconds / 1000) % 60;
  const minutes = Math.floor(totalMilliseconds / (1000 * 60)) % 60;
  const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60)) % 24;
  const totalLifeMillisecondsLuiz = now - birthDateLuiz;
  const totalLifeMillisecondsLucas = now - birthDateLucas;
  const percentageLuiz = Math.min(
    100,
    (diff / totalLifeMillisecondsLuiz) * 100
  );
  const percentageLucas = Math.min(
    100,
    (diff / totalLifeMillisecondsLucas) * 100
  );
  const formattedTime = ` Estamos namorandinho gays há ${years} ${pluralize(
    years,
    "ano",
    "anos"
  )}, 
                           ${months} ${pluralize(months, "mês", "meses")}, 
                           ${days} ${pluralize(days, "dia", "dias")}, 
                           ${hours} ${pluralize(hours, "hora", "horas")}, 
                           ${minutes} ${pluralize(
    minutes,
    "minuto",
    "minutos"
  )} e 
                           ${seconds} ${pluralize(
    seconds,
    "segundo",
    "segundos"
  )}!`;

  document.getElementById("countup").textContent = formattedTime;

  document.getElementById(
    "percentage"
  ).textContent = `Isso é ${percentageLuiz.toFixed(
    2
  )}% da sua vida e ${percentageLucas.toFixed(2)}% da minha`;
}

setInterval(updateCountup, 1000);

updateCountup();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slideIndex >= 1 && slideIndex <= slides.length) {
    slides[slideIndex - 1].style.display = "block";
  }

  if (slideIndex >= 1 && slideIndex <= dots.length) {
    dots[slideIndex - 1].className += " active";
  }
}

const quizData = [
  {
    question:
      "Qual foi o encontro em que fizemos gay sex a sós pela primeira vez?",
    options: ["Olhos d'água", "Pontão", "Madero", "Na sua casa"],
    answer: "Pontão",
    index: 1,
  },
  {
    question: "Qual foi a primeira peça do G7 que a gente viu?",
    options: [
      "Casais Felizes Emagrecem Juntos",
      "Manual de Sobrevivência ao Casamento",
      "Acorda DF",
      "Intimidade é uma Merda",
    ],
    answer: "Acorda DF",
    index: 2,
  },
  {
    question:
      "Qual encontro a gente foi que testemunhamos o carro chegar em 50.000km?",
    options: [
      "Parque das Garças",
      "Algum na UnB",
      "Algum para a academia",
      "Água Mineral",
    ],
    answer: "Parque das Garças",
    index: 3,
  },
  {
    question:
      "Qual foi a situação que começou a nossa troca de mensagens regulares?",
    options: [
      "O seu desafio do gerador de foto de perfil",
      "Uma piada que contei pessoalmente",
      "Informações sobre um date com o Ícaro",
      "Marcar de ir à academia juntos pela primeira vez",
    ],
    answer: "O seu desafio do gerador de foto de perfil",
    index: 4,
  },
  {
    question: "Por que chamamos o Isaac de Ícaro?",
    options: [
      "Pois chamamos ele assim um dia sem querer",
      "Pois seu pai confundiu ao tentar lembrar do nome dele",
      "Pois era o nick dele em algum jogo",
      "Pois ele gostava de ser chamado assim",
    ],
    answer: "Pois seu pai confundiu ao tentar lembrar do nome dele",
    index: 5,
  },
  {
    question: "Qual nome do fake que criamos no Tinder para zoar seu irmão?",
    options: ["Luiza", "Paula", "Nicole", "Gabriella"],
    answer: "Gabriella",
    index: 6,
  },
  {
    question: "Qual foi o maior período que ficamos separados fisicamente?",
    options: ["24 dias", "27 dias", "22 dias", "20 dias"],
    answer: "22 dias",
    index: 7,
  },
  {
    question: "Qual foi o primeiro rolê de amigos que fomos como casal?",
    options: [
      "Aniversário de um amigo seu",
      "Habbib's",
      "Aniversário de uma amiga minha",
      "Bar",
    ],
    answer: "Aniversário de um amigo seu",
    index: 8,
  },
  {
    question: "Quais foram nossos presentes de 1 ano de namoro?",
    options: [
      "Cartinha romântica e cookies",
      "Tênis e nintendo Switch",
      "TacoPep e Camisas de Undertale",
      "Site e Placa de Acrílico",
    ],
    answer: "Site e Placa de Acrílico",
    index: 9,
  },
  {
    question: "Qual era o nome da sua fonte favorita?",
    options: ["Gene 1", "Gênesis 1", "Gente 1", "Genera 1"],
    answer: "Gênesis 1",
    index: 10,
  },
  {
    question:
      "Quais foram os cantores que tiveram mais influência no começo da nossa relação?",
    options: [
      "Kleberiano e Clarissa Falcão",
      "Tim Maia e Tulipa Ruiz",
      "Gloria Groove e Chico Buarque",
      "Duda Beat e Kid Abelha",
    ],
    answer: "Kleberiano e Clarissa Falcão",
    index: 11,
  },
  {
    question: "Qual nome do primeiro cara que fizemos um a três?",
    options: ["Marcos", "Samuel", "Gabriel", "André"],
    answer: "Samuel",
    index: 12,
  },
  {
    question:
      "Qual foi o intervalo de tempo entre nos conhecermos e começarmos o namoro?",
    options: ["3 meses", "2 meses e 3 semanas", "2 meses", "1 mês e meio"],
    answer: "2 meses",
    index: 13,
  },
  {
    question: "Qual nome demos pro nosso dildo e travesseiro de corpo?",
    options: ["Ícaro", "Samuel", "Miguel", "Enzo"],
    answer: "Enzo",
    index: 14,
  },
  {
    question: "Qual desses a gente nunca fez (ainda)?",
    options: [
      "Sexo a 4 na Lust",
      "Sexo no estacionamento da UnB",
      "Sexo na cama do seu irmão",
      "Sexo ao ar livre",
    ],
    answer: "Sexo a 4 na Lust",
    index: 15,
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const quizElement = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizElement.innerHTML = `
    <h1 class="textos">Quiz Completed!</h1>
    <p class="textos">Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();
