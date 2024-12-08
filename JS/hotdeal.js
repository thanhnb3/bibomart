document.addEventListener("DOMContentLoaded", () => {
  const listHotDeal = document.querySelector(".hotdeal-list");
  const itemHotDeal = document.querySelectorAll(".hotdeal-item");
  const nextDeal = document.querySelector(".next-hotdeal button");
  const prevDeal = document.querySelector(".prev-hotdeal button");

  let active = 0;
  let active1 = 1;
  let active2 = 2;
  let active3 = 3;
  let active4 = 4;
  let indexLength = itemHotDeal.length - 1;
  listHotDeal.style.left = "0px";

  // Action click

  nextDeal.onclick = () => {
    if (active4 + 1 > indexLength) {
      active4 = 4;
      active3 = 3;
      active2 = 2;
      active1 = 1;
      active = 0;
    } else {
      active4 = active4 + 1;
      active3 = active4 - 1;
      active2 = active4 - 2;
      active1 = active4 - 3;
      active = active4 - 4;
    }
    moveListLeft();
  };
  prevDeal.onclick = () => {
    if (active - 1 < 0) {
      active = indexLength - 4;
      active1 = indexLength - 3;
      active2 = indexLength - 2;
      active3 = indexLength - 1;
      active4 = indexLength;
    } else {
      active = active - 1;
      active1 = active + 1;
      active2 = active + 2;
      active3 = active + 3;
      active4 = active + 4;
    }
    moveListLeft();
  };

  // Hàm di chuyển sang trái

  function moveListLeft() {
    // Đo khoản cách di chuyển
    let checkLeft = itemHotDeal[active].offsetLeft;
    //   Di chuyển sang trái
    listHotDeal.style.left = -checkLeft + "px";
  }
});
