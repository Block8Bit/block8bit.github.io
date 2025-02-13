//Set and count dates

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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
