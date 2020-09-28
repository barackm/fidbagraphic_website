let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     MynavBar.style.top = "0";
//   } else {
//     MynavBar.style.top = "-56px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// const openNav = () => {
//   document.getElementById("mySidebar").style.width = "250px";
// };

// const claseNav = () => {
//   document.getElementById("mySidenav").style.width = "0";
// };

// var mybutton = document.getElementById("myBtn");

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document

const sections = document.querySelectorAll("section");
const options = {
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
  entries.forEach((entry) => {
    // entry.isIntersecting = true;
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    // activeAnchor.classList.add("activeNav");
    entry.isIntersecting
      ? activeAnchor.classList.add("activeNav")
      : activeAnchor.classList.remove("activeNav");
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
