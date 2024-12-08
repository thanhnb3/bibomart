// QR CODE DOWNLOAD APP
const downApp = document.querySelector(".down-app-text");
const qrCode = document.querySelector(".qr-code");

// Biến theo dõi trạng thái chuột có trong vùng nào không
let isMouseInside = false;

downApp.addEventListener("mouseover", () => {
  qrCode.classList.add("active");
  isMouseInside = true;
});

qrCode.addEventListener("mouseover", () => {
  isMouseInside = true;
});

// Khi chuột rời khỏi vùng downApp
downApp.addEventListener("mouseout", (event) => {
  // Kiểm tra nếu chuột không vào vùng qrCode
  if (!qrCode.contains(event.relatedTarget)) {
    setTimeout(() => {
      if (!isMouseInside) {
        qrCode.classList.remove("active");
      }
    }, 0); // Đợi để kiểm tra sự kiện chuột
  }
});

// Khi chuột rời khỏi vùng qrCode
qrCode.addEventListener("mouseout", (event) => {
  // Kiểm tra nếu chuột không quay lại vùng downApp
  if (!downApp.contains(event.relatedTarget)) {
    isMouseInside = false; // Đánh dấu chuột đã rời khỏi cả hai vùng
    setTimeout(() => {
      if (!isMouseInside) {
        qrCode.classList.remove("active");
      }
    }, 0);
  }
});

// MENU
const itemMenu = document.querySelectorAll(".item-menu");
const subMenu = document.querySelectorAll(".sub-menu-item");

// Hàm ẩn submenu
function hideSubMenu() {
  subMenu.forEach((item) => item.classList.remove("active"));
}

// Hàm kiểm tra hover
function isHovering(elements) {
  return Array.from(elements).some((el) => el.matches(":hover"));
}

// Xử lý để hiển thị submenu
itemMenu.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    subMenu.forEach((itemSubMenu) => {
      itemSubMenu.classList.remove("active");
    });
    subMenu[index].classList.add("active");
  });
});

// Xử lý khi di chuột ra khỏi itemMenu và subMenu
itemMenu.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!isHovering(itemMenu) && !isHovering(subMenu)) {
        hideSubMenu();
      }
    }, 200);
  });
});

subMenu.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!isHovering(itemMenu) && !isHovering(subMenu)) {
        hideSubMenu();
      }
    }, 200);
  });
});
