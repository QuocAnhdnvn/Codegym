"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Cuộn mượt khi nhấn vào menu
  document.querySelectorAll(".menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Hiển thị thông báo khi nhấn vào email
  const emailElement = document.querySelector("#thong-tin a");
  if (emailElement) {
    emailElement.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Email của tôi: " + this.textContent);
    });
  }
});
