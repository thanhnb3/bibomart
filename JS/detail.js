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
    // Khoảng cách tối đa có thể trượt
    const maxMove = heightList - heightWrap;
    // Khoảng cách mỗi bước trượt
    const stepMove = maxMove / (itemListThumb.length - 1);
    // Khoảng cách cần trượt
    const needMove = Math.min(index * stepMove, maxMove);
    // Hàm Math.min đảm bảo khoản trượt không vượt quá khoảng cách tối đa có thể trượt.
    // Hàm trượt
    listThumb.style.transform = "translateY(-" + needMove + "px)";
  });
});

// JS Sản phẩm mua cùng
document.addEventListener("DOMContentLoaded", () => {
  const sameList = document.querySelector(".same-product-list");
  const sameItem = document.querySelectorAll(".same-product-item");
  const nextSame = document.querySelector(".next-same button");
  const prevSame = document.querySelector(".prev-same button");

  let active = 0;
  let active1 = 1;
  let active2 = 2;
  let active3 = 3;
  let active4 = 4;
  const indexSame = sameItem.length - 1;
  sameList.style.left = "0px";

  nextSame.onclick = () => {
    if (active4 + 1 > indexSame) {
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
    moveSameList();
  };

  prevSame.onclick = () => {
    if (active - 1 < 0) {
      active = indexSame - 4;
      active1 = indexSame - 3;
      active2 = indexSame - 2;
      active3 = indexSame - 1;
      active4 = indexSame;
    } else {
      active -= 1;
      active1 = active + 1;
      active2 = active + 2;
      active3 = active + 3;
      active4 = active + 4;
    }
    moveSameList();
  };

  function moveSameList() {
    const moveList = sameItem[active].offsetLeft;
    sameList.style.left = -moveList + "px";
  }
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const sameList = document.querySelector(".same-product-list");
  const sameItem = document.querySelectorAll(".same-product-item");
  const nextSame = document.querySelector(".next-same button");
  const prevSame = document.querySelector(".prev-same button");

  const itemsToMove = 3; // Số item di chuyển mỗi lần
  const totalItems = sameItem.length; // Tổng số item trong danh sách
  const itemWidth = sameItem[0].offsetWidth + 17; // Độ rộng 1 item (bao gồm margin-right)
  let currentIndex = 0; // Vị trí hiện tại

  // Hàm cập nhật vị trí danh sách
  function updatePosition() {
    const moveDistance = currentIndex * itemWidth;
    sameList.style.transform = `translateX(-${moveDistance}px)`;
    sameList.style.transition = "transform 0.5s ease";
  }

  // Xử lý khi nhấn Next
  nextSame.onclick = () => {
    currentIndex += itemsToMove; // Di chuyển thêm 3 item
    if (currentIndex >= totalItems) {
      // Nếu vượt quá tổng số item, quay lại đầu (vòng tròn)
      currentIndex = currentIndex % totalItems;
    }
    updatePosition();
  };

  // Xử lý khi nhấn Prev
  prevSame.onclick = () => {
    currentIndex -= itemsToMove; // Lùi lại 3 item
    if (currentIndex < 0) {
      // Nếu nhỏ hơn 0, quay lại cuối (vòng tròn)
      currentIndex = (totalItems + currentIndex) % totalItems;
    }
    updatePosition();
  };

  // Đảm bảo trạng thái ban đầu
  updatePosition();
});
*/

// JS CONTENT INFO
// tab title
const tabTitle = document.querySelectorAll(".tab-content");

tabTitle.forEach((item) => {
  item.onclick = () => {
    tabTitle.forEach((it) => {
      it.classList.remove("active");
    });
    item.classList.add("active");
  };
});
// tab content
document.addEventListener("DOMContentLoaded", () => {
  const tabContent = document.querySelectorAll(".tab-content");
  const detailContent = document.querySelectorAll(".content-tab");
  const readMore = document.querySelector(".readMore");

  function readMoreActive() {
    const contentActive = document.querySelector(".content-tab.active");
    const activeHeight = contentActive.offsetHeight;
    if (activeHeight > 500) {
      contentActive.style.height = "500px";
      readMore.classList.add("action");
    } else if (activeHeight <= 500 && activeHeight > 0) {
      contentActive.style.height = "auto";
      readMore.classList.remove("action");
    }
  }

  readMoreActive();

  tabContent.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      readMoreActive();
      detailContent.forEach((detail) => {
        detail.classList.remove("active");
      });
      detailContent[index].classList.add("active");
      readMoreActive();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonReadMore = document.querySelector(".readMore.action");
  const buttonContent = document.querySelector(".readMore.action button");
  const fullContent = document.querySelector(".content-tab.active");

  let isExpanded = false;
  // Mặc định khi load trang thì content sẽ ở trạng thái thu gọn, isExpanded là tên biến => nghĩa là content đang ở trạng thái mở rộng, false là không.

  buttonReadMore.addEventListener("click", () => {
    if (isExpanded) {
      // Nếu đang ở trạng thái "Thu gọn"
      fullContent.style.height = "500px";
      buttonContent.textContent = "Xem thêm";
    } else {
      // Nếu đang ở trạng thái "Xem thêm"
      fullContent.style.height = "auto";
      buttonContent.textContent = "Thu gọn";
    }
    // Đổi trạng thái
    isExpanded = !isExpanded;
  });
});
