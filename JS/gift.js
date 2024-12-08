// SLIDE CHẠY ẢNH GIFT
document.addEventListener("DOMContentLoaded", () => {
  const giftLists = document.querySelectorAll(".slide-donate-list");

  giftLists.forEach((giftList) => {
    const giftItems = giftList.querySelectorAll(".slide-donate-item");
    let active = 0;
    let indexLength = giftItems.length - 1;

    function moveGiftLeft() {
      let checkGiftLeft = giftItems[active].offsetLeft;
      giftList.style.left = -checkGiftLeft + "px";
    }

    setInterval(() => {
      if (active + 1 > indexLength) {
        active = 0;
      } else {
        active += 1;
      }
      moveGiftLeft();
    }, 3000);
  });
});

// CHẠY ITEM GIFT
document.addEventListener("DOMContentLoaded", () => {
  const giftSlideList = document.querySelector(".gift-list");
  const giftSlideItem = document.querySelectorAll(".gift-item");
  const nextGift = document.querySelector(".next-gift button");
  const prevGift = document.querySelector(".prev-gift button");

  let active = 0;
  let active1 = 1;
  let active2 = 2;
  let active3 = 3;
  let active4 = 4;
  let indexSlide = giftSlideItem.length - 1;

  function moveLeftSlide() {
    const checkSlideLeft = giftSlideItem[active].offsetLeft;
    giftSlideList.style.left = -checkSlideLeft + "px";
  }

  nextGift.onclick = () => {
    if (active4 + 1 > indexSlide) {
      active4 = 4;
      active3 = 3;
      active2 = 2;
      active1 = 1;
      active = 0;
    } else {
      active4 += 1;
      active3 = active4 - 1;
      active2 = active4 - 2;
      active1 = active4 - 3;
      active = active4 - 4;
    }
    moveLeftSlide();
  };

  prevGift.onclick = () => {
    if (active - 1 < 0) {
      active = indexSlide - 4;
      active1 = active + 1;
      active2 = active + 2;
      active3 = active + 3;
      active4 = active + 4;
    } else {
      active -= 1;
      active1 = active + 1;
      active2 = active + 2;
      active3 = active + 3;
      active4 = active + 4;
    }
    moveLeftSlide();
  };
});
