const blockBusinessParallax = document.querySelector(".header__block-business");
const headerBodyParallax = document.querySelector(".header__body");
const aboutGridFirst = document.querySelector(".about__grid-wrapper_1");
const aboutGridSecond = document.querySelector(".about__grid-wrapper_2");

new simpleParallax(blockBusinessParallax, {
  orientation: "up",
  overflow: true,
});

new simpleParallax(headerBodyParallax, {
  orientation: "up",
  overflow: true,
});

new simpleParallax(aboutGridFirst, {
  orientation: "up",
  overflow: true,
});

new simpleParallax(aboutGridSecond, {
  orientation: "up",
  overflow: true,
});
