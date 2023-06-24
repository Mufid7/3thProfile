let typed = new Typed(".typing", {
    strings: [
      "Assalamualaikum, Hello I'm Mufid",
      "a Web Developer and IoT engineer",
      "interested to in design",
      "also A Muslim person",
    ],
    typeSpeed: 35,
    backSpeed: 30,
    loop: true,
  });

const menuToogle = document.querySelector('.menu-toggle input');
      const nav = document.querySelector('.menu-me ul');

      menuToogle.addEventListener('click', function() {
        nav.classList.toggle('slide')
      })