document.addEventListener("DOMContentLoaded", function () {
  const reduceButton = document.querySelector(".reduce");
  const increaseButton = document.querySelector(".increase");
  const quantityInput = document.querySelector(".value_quatity");

  reduceButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);

    if (currentValue > minValue) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);

    if (currentValue < maxValue) {
      quantityInput.value = currentValue + 1;
    }
  });
});

// slide thumb

document.addEventListener("DOMContentLoaded", () => {
  const itemThumb = document.querySelectorAll(".slide-thumb-item");
  const itemImageList = document.querySelector(".image-product-list");

  itemThumb.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      itemThumb.forEach((it) => {
        it.classList.remove("active");
      });
      item.classList.add("active");
      //  tính khoản cách cần di chuyển
      const moveSlide = index * -478;
      //   di chuyển
      itemImageList.style.transform = "translateX(" + moveSlide + "px)";
    });
  });
});

// di chuyển slide thumb
// 530 - 480 / 5 = 10px

const wrapThumb = document.querySelector(".slide-thumb-wrap");
const listThumb = document.querySelector(".slide-thumb-list");
const itemListThumb = document.querySelectorAll(".slide-thumb-item");

const heightList = listThumb.offsetHeight;
const heightItem = itemListThumb[0].offsetHeight;
const heightWrap = wrapThumb.offsetHeight;

itemListThumb.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    // Khoản cách tối đa có thể trượt
    const maxMove = heightList - heightWrap;
    // Khoản cách mỗi bước trượt
    const stepMove = maxMove / (itemListThumb.length - 1);
    // Khoản cách cần trược
    const needMove = Math.min(index * stepMove, maxMove);
    // Hàm trượt
    listThumb.style.transform = "translateY(-" + needMove + "px)";
  });
});
