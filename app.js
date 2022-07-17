const question = document.querySelectorAll(".question");
const faqs = document.querySelectorAll(".faq");
const arrow = document.querySelectorAll(".arrow");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("highlighted");
    faq.classList.toggle("is-open");
    faq.classList.toggle("arrow-down");
  });
});
