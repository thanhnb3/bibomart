document.addEventListener("DOMContentLoaded", () => {
  const brandList = document.querySelector(".brand-list");
  const brandItem = document.querySelectorAll(".brand-column");
  const nextBrand = document.querySelector(".next-brand button");
  const prevBrand = document.querySelector(".prev-brand button");

  let active = 0;
  let indexBrand = brandItem.length - 1;
  brandList.style.left = "0px";

  function moveLeftBrand() {
    const checkLeftBrand = brandItem[active].offsetLeft;
    brandList.style.left = -checkLeftBrand + "px";
  }

  nextBrand.onclick = () => {
    if (active + 1 > indexBrand) {
      active = 0;
    } else {
      active += 1;
    }
    moveLeftBrand();
  };

  prevBrand.onclick = () => {
    if (active - 1 < 0) {
      active = indexBrand;
    } else {
      active -= 1;
    }
    moveLeftBrand();
  };

  setInterval(() => {
    if (active + 1 > indexBrand) {
      active = 0;
    } else {
      active += 1;
    }
    moveLeftBrand();
  }, 3000);
});
