let accounts = [
  { id: "gva.com.vn", pass: "12345", name: "Thầy A", role: "admin" },
  { id: "gvb.com.vn", pass: "12345", name: "Thầy B", role: "admin" },
  { id: "sv1.com.vn", pass: "11111", name: "Sinh viên 1", role: "user" },
];

let currentUser = null;
let currentUserName = "";
let currentRole = "";

// Hiện form đăng nhập
function showLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
  document.getElementById("loginID").value = "";
  document.getElementById("loginPass").value = "";
  document.getElementById("loginError").style.display = "none";
}

// Ẩn form đăng nhập
function hideLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Xử lý đăng nhập
function handleLogin() {
  const id = document.getElementById("loginID").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const errorDiv = document.getElementById("loginError");

  const found = accounts.find((acc) => acc.id === id && acc.pass === pass);
  if (found) {
    currentUser = id;
    currentUserName = found.name;
    currentRole = found.role;

    localStorage.setItem("loggedInUser", JSON.stringify(found));

    hideLoginModal();
    // errorDiv.style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    updateHeader();
    navigateToHome();
    // Có thể cập nhật giao diện chào mừng tại đây nếu muốn
  } else {
    errorDiv.innerText = "ID hoặc mật khẩu không đúng!";
    errorDiv.style.display = "block";
  }
}

function updateHeader() {
  let headerDiv = document.getElementById("headerRight");
  let addButton = document.querySelector('[onclick="navigateToAdd()"]');
  if (currentUser) {
    headerDiv.innerHTML = `
      <button class="me-2" onclick="showInformation()">👤 ${currentUserName}</button>
      <button class="btn btn-outline-danger btn-sm" onclick="logout()">Đăng xuất</button>
    `;
  } else {
    headerDiv.innerHTML = `
      <button class="btn btn-outline-primary me-2" onclick="showLoginModal()">
        <i class="bi bi-box-arrow-in-right"></i> Đăng nhập
      </button>
    `;
  }
  if (addButton) {
    if (currentRole === "admin") {
      addButton.style.display = "inline-block";
    } else {
      addButton.style.display = "none";
    }
  }
}

function logout() {
  currentUser = null;
  currentUserName = "";
  currentRole = "";

  localStorage.removeItem("loggedInUser");
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("ui").innerHTML = "";
  updateHeader();
}
// Chặn chức năng thêm mới/chỉnh sửa nếu chưa đăng nhập
function checkLoginBeforeAction(actionCallback) {
  if (!currentUser) {
    showLoginModal();
    return;
  }
  actionCallback();
}

function addAccount() {
  myGrade.getDataInStorage();
  let acc = document.getElementById("loginAcc").value;
  let pass = document.getElementById("loginPass").value;
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  accounts.push({ id: acc, pass: pass, name: name, role: role });
  console.log(accounts);
}

// function addStudent() {
//   myGrade.getDataInStorage();
//   let list = myGrade.getListStudent();

//   let id = list.length + 1;
//   let name = document.getElementById("name").value;
//   let faculty = document.getElementById("faculty").value;
//   let grade = document.getElementById("grade").value;
//   let score = document.getElementById("score").value;
//   let avatar = document.getElementById("avatar").value;
//   let p = new Student(id, name, faculty, grade, score, avatar);
//   myGrade.add(p);
//   navigateToHome();
// }

window.onload = function () {
  let savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    let parsedUser = JSON.parse(savedUser);
    currentUser = parsedUser.id;
    currentUserName = parsedUser.name;
    currentRole = parsedUser.role;

    document.getElementById("mainApp").style.display = "block";
    navigateToHome();
  } else {
    document.getElementById("mainApp").style.display = "none";
  }

  updateHeader();
};
