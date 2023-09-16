import '../src/styles.scss';

window.onload = () => {
  console.log('first');
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu-mobile");
  const accordion = document.getElementsByClassName("tab");
  console.log(accordion);

  burgerBtn.onclick = function () {
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("hidden");
  }

  function togglePrice() {
    const btn = document.querySelector(".switcher");
    const bilingItem = document.querySelectorAll(".biling__item");

    btn.addEventListener("click", () => {
      btn.classList.toggle("switcher-active");

      if (!btn.classList.contains("switcher-active")) {
        bilingItem[0].classList.add("biling__item-active");
        bilingItem[1].classList.remove("biling__item-active");
      } else {
        bilingItem[0].classList.remove("biling__item-active");
        bilingItem[1].classList.add("biling__item-active");
      }
    });
  }

  togglePrice();

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("tab__active");
    });
  }

};
