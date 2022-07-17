const navmenu = document.querySelector(".navmenu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () =>{
   navmenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   hamburger.classList.toggle("active");
   hamburger.classList.toggle("active");
});

document.querySelectorAll(".linksb").forEach(n =>n.addEventListener("click", () => {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}))
document.querySelectorAll(".cta").forEach(n =>n.addEventListener("click", () => {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}))