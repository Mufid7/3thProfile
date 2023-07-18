const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDown = document.querySelector('.dropdown')

// BUKA TUTUP MENU
toggleBtn.onclick = function () {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')
    // PERINTAH ICON X DAN HAMBURGER
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

let typed = new Typed(".typing", {
    strings: [
      "assalamualaikum, I'm Mufid",
      "Beginner to Web developer, Interesting in IoT Engineering and Design",
      "Also trying to become a good muslim person",
    ],
    typeSpeed: 35,
    backSpeed: 30,
    loop: true,
  });

