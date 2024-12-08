const listImg = document.querySelector(".slider-list");
const itemImg = document.querySelectorAll(".slider-item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dots li");

// Hành động trên nút next, prev
let active = 0;
let indexActive = itemImg.length - 1;
listImg.style.left = "0px";

// hàm di chuyển slide sang trái

next.onclick = () => {
  if (active + 1 > indexActive) {
    active = 0;
  } else {
    active = active + 1;
  }
  moveLeftSlider();
};

prev.onclick = () => {
  if (active - 1 < 0) {
    active = indexActive;
  } else {
    active = active - 1;
  }
  moveLeftSlider();
};

function moveLeftSlider() {
  // đo khoản cách cần di chuyển đúng bằng 1 img
  let checkLeft = itemImg[active].offsetLeft;
  //   di chuyển slide sang trái
  listImg.style.left = -checkLeft + "px";
  //   Xử lý nút dots
  let lastDotsActive = document.querySelector(".dots li.dotsActive");
  lastDotsActive.classList.remove("dotsActive");
  dots[active].classList.add("dotsActive");
}

// slide tự chạy sau 3s

// slide tự chạy sau 3s
setInterval(function () {
  if (active + 1 > indexActive) {
    active = 0;
  } else {
    active += 1;
  }
  moveLeftSlider();
}, 3000); // Slide sẽ tự động chuyển sau 3 giây

// Hành động click vào nút dots

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    active = index;
    moveLeftSlider();
  });
});
