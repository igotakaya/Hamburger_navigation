(function () {
  const btn = document.querySelector(".hamburger");

  //クラス[is-active]を付与し、 buttonの形を変える
  btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
  });




  const Header = document.getElementById("header");

  btn.addEventListener("click", navToggle);




  function navToggle() {
    if (Header.classList.contains("open-nav")) {
      navCloseFn();
    } else {
      navOpenFn();
    }
  }

  function navOpenFn() {
    Header.classList.add("open-nav");
  }

  function navCloseFn() {
    Header.classList.remove("open-nav");
  }
})();
