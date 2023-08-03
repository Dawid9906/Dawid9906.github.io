const toggleBTN = document.getElementsByClassName("responsywna_lista")[0];
const links = document.getElementsByClassName("links")[0];

toggleBTN.addEventListener("click", () => {
  links.classList.toggle("active");
});
links.addEventListener("click", () => {
  links.classList.remove("active");
});

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });
  return value;
};

setCookie = (cName, cValue, expDays) => {
  let date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
};

document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 30);
});

cookieMessage = () => {
  if (!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
};
let e = [];
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".photo");
const contents = document.querySelectorAll(".content");
let sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.add("none");
  });
  contents.forEach((content) => {
    content.classList.add("none");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.remove("none");
  contents[manual].classList.remove("none");
  e.push(manual);
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
    console.log(e[e.length - 1]);
  });
});
let n = e[e.length - 1];

window.addEventListener("load", cookieMessage);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  let repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      slides.forEach((slide) => {
        slide.classList.add("none");
      });
      contents.forEach((content) => {
        content.classList.add("none");
      });

      btns[i].classList.add("active");
      slides[i].classList.remove("none");
      contents[i].classList.remove("none");
      i++;
      if (slides.length === i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
