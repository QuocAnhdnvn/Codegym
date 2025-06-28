let danhSachSo = [];
loadFromStorage();

function validateSOTIETKIEM(
  maSo,
  loaiTietKiem,
  hoTen,
  cmnd,
  ngayMoSo,
  soTienGui
) {
  let errors = [];

  if (!maSo || typeof maSo !== "string" || maSo.length > 5) {
    errors.push("Mã sổ tối đa 5 ký tự.");
  }
  if (
    !loaiTietKiem ||
    typeof loaiTietKiem !== "string" ||
    loaiTietKiem.length > 10
  ) {
    errors.push("Loại tiết kiệm tối đa 10 ký tự.");
  }
  if (!hoTen || typeof hoTen !== "string" || hoTen.length > 30) {
    errors.push("Họ tên tối đa 30 ký tự.");
  }
  if (isNaN(cmnd) || cmnd.toString().length < 6) {
    errors.push("Chứng minh nhân dân phải là số và có ít nhất 6 chữ số.");
  }
  // Kiểm tra ngày với regex (YYYY-MM-DD)
  if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(ngayMoSo)) {
    errors.push("Ngày mở sổ phải đúng định dạng YYYY-MM-DD.");
  }
  if (isNaN(soTienGui) || soTienGui <= 0) {
    errors.push("Số tiền gửi phải là số và lớn hơn 0.");
  }
  return errors;
}

function isMaSoTrung(maSo) {
  return danhSachSo.some((so) => so.maSo === maSo);
}

function themSOTIETKIEM() {
  // Lấy dữ liệu từ form (giả sử có input với id tương ứng)
  let maSo = document.getElementById("maSo").value.trim();
  let loaiTietKiem = document.getElementById("loaiTietKiem").value.trim();
  let hoTen = document.getElementById("hoTen").value.trim();
  let cmnd = document.getElementById("cmnd").value.trim();
  let ngayMoSo = document.getElementById("ngayMoSo").value.trim();
  let soTienGui = document.getElementById("soTienGui").value.trim();

  // Ép kiểu số
  cmnd = Number(cmnd);
  soTienGui = Number(soTienGui);

  // Validate
  let errors = validateSOTIETKIEM(
    maSo,
    loaiTietKiem,
    hoTen,
    cmnd,
    ngayMoSo,
    soTienGui
  );

  if (isMaSoTrung(maSo)) {
    errors.push("Mã sổ đã tồn tại!");
  }

  if (errors.length > 0) {
    document.getElementById("thongBao").innerHTML = errors
      .map((e) => `<p>${e}</p>`)
      .join("");
    return;
  }

  // Nếu hợp lệ, thêm vào mảng
  let soMoi = new SOTIETKIEM(
    maSo,
    loaiTietKiem,
    hoTen,
    cmnd,
    ngayMoSo,
    soTienGui
  );
  danhSachSo.push(soMoi);

  document.getElementById(
    "thongBao"
  ).innerHTML = `<p>Thêm sổ tiết kiệm thành công!</p>`;
  hienThiDanhSachSo();
  saveToStorage();
}

function hienThiDanhSachSo() {
  let tbody = document
    .getElementById("danhsach")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  danhSachSo.forEach((so) => {
    let row = tbody.insertRow();
    row.insertCell().innerText = so.maSo;
    row.insertCell().innerText = so.loaiTietKiem;
    row.insertCell().innerText = so.hoTen;
    row.insertCell().innerText = so.cmnd;
    row.insertCell().innerText = so.ngayMoSo;
    row.insertCell().innerText = so.soTienGui;
  });
}

function xoaSOTIETKIEM() {
  let maSo;
  while (true) {
    maSo = prompt("Nhập mã sổ tiết kiệm muốn xóa:");
    if (maSo === null) return; // Người dùng bấm Cancel

    maSo = maSo.trim();
    if (!maSo) {
      alert("Bạn chưa nhập mã sổ. Vui lòng nhập lại.");
      continue;
    }

    let index = danhSachSo.findIndex((so) => so.maSo === maSo);
    if (index === -1) {
      alert("Mã sổ không tồn tại. Vui lòng nhập lại.");
      continue;
    }

    // Tồn tại, xác nhận xóa
    let xacNhan = confirm(
      `Bạn có chắc muốn xóa sổ tiết kiệm mã ${maSo} không?`
    );
    if (xacNhan) {
      danhSachSo.splice(index, 1);
      alert("Đã xóa sổ tiết kiệm thành công!");
      hienThiDanhSachSo();
      saveToStorage();
    }
    break;
  }
}

function saveToStorage() {
  localStorage.setItem("danhSachSo", JSON.stringify(danhSachSo));
}

function loadFromStorage() {
  const data = localStorage.getItem("danhSachSo");
  if (data) {
    // Parse lại thành object
    danhSachSo = JSON.parse(data);
    hienThiDanhSachSo();
  }
}
