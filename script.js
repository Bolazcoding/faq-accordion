"use strict";

const openPlus = document.querySelectorAll(".icon-plus");
const closeMinus = document.querySelectorAll(".icon-minus");
const openFaq = document.querySelectorAll(".faq-text");
const faq = document.querySelectorAll("h2");

function faqOpenClose(i) {
  openFaq[i].classList.toggle("hidden");
  openPlus[i].classList.toggle("hidden");
  closeMinus[i].classList.toggle("icon-minus-active");
}

for (let i = 0; i < openPlus.length; i++) {
  openPlus[i].addEventListener("click", function () {
    faqOpenClose(i);
  });
}

for (let i = 0; i < closeMinus.length; i++) {
  closeMinus[i].addEventListener("click", function () {
    faqOpenClose(i);
  });
}

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    faqOpenClose(i);
  });
}
