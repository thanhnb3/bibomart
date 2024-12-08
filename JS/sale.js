document.addEventListener("DOMContentLoaded", () => {
  const saleList = document.querySelector(".sale-list");
  const saleItem = document.querySelectorAll(".sale-item");
  const nextSale = document.querySelector(".next-sale button");
  const prevSale = document.querySelector(".prev-sale button");

  let active = 0;
  let active1 = 1;
  let active2 = 2;
  let indexSale = saleItem.length - 1;
  saleList.style.left = "0px";

  function moveLeftSale() {
    const checkLeftSale = saleItem[active].offsetLeft;
    saleList.style.left = -checkLeftSale + "px";
  }

  nextSale.onclick = () => {
    if (active2 + 1 > indexSale) {
      active = 0;
      active1 = active + 1;
      active2 = active + 2;
    } else {
      active2 += 1;
      active1 = active2 - 1;
      active = active2 - 2;
    }
    moveLeftSale();
  };

  prevSale.onclick = () => {
    if (active - 1 < 0) {
      active = indexSale - 2;
      active1 = active + 1;
      active2 = active2 + 2;
    } else {
      active = active - 1;
      active1 = active + 1;
      active2 = active + 2;
    }
    moveLeftSale();
  };
});
