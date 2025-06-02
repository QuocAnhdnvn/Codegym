// Tính giá điện

function inputNhap() {
  let soChuDien = +document.getElementById("soChuDien").value;

  if (isNaN(soChuDien) || soChuDien <= 0) {
    document.getElementById("show").innerHTML =
      "Bạn đã nhập sai số chữ điện, vui lòng nhập lại";
  } else if (soChuDien <= 50) {
    document.getElementById("show").innerHTML =
      "Bạn dùng điện ở bậc 1, đơn giá là 1984, giá điện của bạn là: " +
      soChuDien * 1984 +
      "VNĐ";
  } else if (soChuDien <= 100) {
    document.getElementById("show").innerHTML =
      "Bạn dùng điện ở bậc 2, đơn giá là 2050, giá điện của bạn là: " +
      soChuDien * 2050 +
      "VNĐ";
  } else {
    document.getElementById("show").innerHTML =
      "Bạn dùng điện ở bậc 3, đơn giá là 2380, giá điện của bạn là: " +
      soChuDien * 2380 +
      "VNĐ";
  }
}

// Hiển thị ảnh
function inputAnh() {
  let anh = document.getElementById("anh").value;
  document.getElementById(
    "hienThiAnh"
  ).innerHTML = `<img src="${anh}" alt="Mô tả hình ảnh">`;
}

// Hiển thị link
function inputA() {
  let a = document.getElementById("a").value;
  document.getElementById(
    "hienthilink"
  ).innerHTML = `<a href="${a}" target="_blank">nội dung liên kết</a>`;
}
