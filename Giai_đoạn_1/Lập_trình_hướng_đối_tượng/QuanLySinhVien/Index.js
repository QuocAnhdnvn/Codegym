let myGrade = new Grade(1, "Đại học A");
console.log("myGrade", myGrade);

function getAll(list) {
  // nhận vào 1 mảng student => có gì thì hiển thị đó
  let html = ``;
  for (let i = 0; i < list.length; i++) {
    let student = list[i]; // lấy ra từng student
    html += `
                 <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.faculty}</td>
                    <td>${student.grade}</td>
                    <td>${student.score}</td>
                    <td><img src="${
                      student.avatar || "https://via.placeholder.com/80"
                    }" class="img-fluid rounded" style="width:80px; height:80px; object-fit:cover;"></td>
                    ${
                      currentRole === "admin"
                        ? `<td><button onClick="deleteStudent(${student.id})">Xóa</button></td>
                        <td><button onClick="navigateToUpdate(${student.id})">Sửa</button></td>`
                        : `<td colspan="2">-</td>`
                    }
                </tr>
        `;
  }
  document.getElementById("list_student").innerHTML = html;
}

function search() {
  let nameSearch = document.getElementById("search-name").value;
  let gradeFaculty = document.getElementById("search-faculty").value;
  let gradeSearch = document.getElementById("search-grade").value;
  let scoreStart = +document.getElementById("score-start").value;
  let scoreEnd = +document.getElementById("score-end").value;
  if (!scoreStart) scoreStart = -Infinity;
  if (!scoreEnd) scoreEnd = Infinity;
  let list = myGrade.getListSearch(
    nameSearch,
    gradeFaculty,
    gradeSearch,
    scoreStart,
    scoreEnd
  );
  getAll(list);
}

function navigateToHome() {
  document.getElementById("ui").innerHTML = `
      <h2>Danh sách sinh viên</h2>
      <input type="text" placeholder="Tìm tên" id="search-name" oninput="search()"
      />
      <input type="text" placeholder="Tìm khoa" id="search-faculty" oninput="search()"
      />
      <input type="text" placeholder="Tìm lớp" id="search-grade" oninput="search()"
      />

      <input
        type="number" placeholder="Điểm tối thiểu" id="score-start" oninput="search()"
      />
      <input
        type="number" placeholder="điểm tối đa" id="score-end" oninput="search()"
      />
      <br />
      <br />
      <table class="table table-bordered text-center align-middle" style="table-layout:fixed;">
        <thead class="table-light">
         <tr>
            <th style="width:10px;">ID</th>
            <th style="width:100px;">Tên</th>
            <th style="width:25px;">Khoa</th>
            <th style="width:25px;">Lớp</th>
            <th style="width:40px;">Điểm</th>
            <th style="width:100px;">Ảnh đại diện</th>
            <th style="width:60px;" colspan="2">Chỉnh sửa</th>
        </tr>
        </thead>
        <tbody id="list_student"></tbody>
      </table>
    `;
  myGrade.getDataInStorage();
  let list = myGrade.getListStudent(); // Mảng Student
  console.log("list", list);
  getAll(list);
}

function addStudent() {
  myGrade.getDataInStorage();
  let list = myGrade.getListStudent();

  let id = list.length + 1;
  //   let name = document.getElementById("name").value;
  let faculty = document.getElementById("faculty").value;
  let grade = document.getElementById("grade").value;
  let score = document.getElementById("score").value;
  let avatar = document.getElementById("avatar").value;

  let name = "";
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === checkAccId) {
      name = accounts[i].name;
      break;
    }
  }

  if (!name) {
    alert("Không tìm thấy tên cho tài khoản này!");
    return;
  }
  let p = new Student(id, name, faculty, grade, score, avatar);
  myGrade.add(p);
  navigateToHome();
}

function deleteStudent(id) {
  let isConfirm = confirm("Bạn chắc chắn chứ ?");
  if (isConfirm) {
    myGrade.remove(id);
    navigateToHome();
  }
}

function updateStudent(id) {
  let name = document.getElementById("name").value;
  let faculty = document.getElementById("faculty").value;
  let grade = document.getElementById("grade").value;
  let score = document.getElementById("score").value;
  let avatar = document.getElementById("avatar").value;

  let p = new Student(id, name, faculty, grade, score, avatar);
  myGrade.update(id, p);
  navigateToHome();
}

function navigateToUpdate(id) {
  // hiển thị dữ liệu cũ
  let student = myGrade.getStudentById(id);
  if (!student) {
    alert("Không tìm thấy sinh viên");
    return;
  }
  document.getElementById("ui").innerHTML = `
 <h2>Sửa thông tin học sinh</h2>
    <div>
    <h5>Tên Học Sinh</h5>
      <input type="text" id="name" value="${student.name}"><br><br>
          <h5>Khoa</h5>
      <input type="text" id="faculty" value="${student.faculty}"><br><br>
                <h5>Lớp</h5>
      <input type="text" id="grade" value="${student.grade}"><br><br>
                <h5>Điểm trung bình</h5>
      <input type="text" id="score" value="${student.score}"><br><br>
                      <h5>Ảnh đại diện</h5>
      <input type="text" id="avatar" value="${student.avatar || ""}"><br><br>
      <button class="btn btn-primary" onClick="updateStudent(${id})">Sửa</button>
    </div>
    `;
}

function navigateToAdd() {
  document.getElementById("ui").innerHTML = `
 <h2>Nhập thông tin tài khoản</h2>
      <div>
        <table>
          <tr>
            <th><label for="mySelect">Tài khoản đăng nhập:</label></th>
            <th>
              <input type="text" placeholder="ID đăng nhập" id="loginAcc" />
            </th>
          </tr>
          <tr>
            <th><label for="mySelect">Mật khẩu:</label></th>
            <th><input type="text" placeholder="Mật khẩu" id="loginPass" /></th>
          </tr>
          <tr>
            <th><label for="mySelect">Quyền truy cập:</label></th>
            <th>
              <select id="role" name="Quyền">
                <option value="admin">Giảng viên (admin)</option>
                <option value="user">Sinh viên (user)</option>
              </select>
            </th>
          </tr>
          <tr>
            <th><label for="mySelect">Tên chủ tài khoản:</label></th>
            <th><input type="text" placeholder="Tên" id="name" /></th>
          </tr>
        </table>
        <button class="btn btn-success" onClick="addAccount()">Lưu</button>
      </div>

  `;
}

function navigateToAdd2() {
  document.getElementById("ui").innerHTML = `
        <h2>Nhập thông tin tài khoản</h2>
        <table>
          <tr>
            <th><label for="mySelect">Tài khoản liên kết:</label></th>
            <td>
              <input type="text" placeholder="ID đăng nhập" id="linkedAccount" />
            </td>
            <td>
              <button class="btn btn-success" onClick="addInfroAcc()">Nhập</button>
            </td>
          </tr>
        </table>

        <div id="ui1"></div>
    `;
}

function addInfroAcc() {
  let checkAcc = document.getElementById("linkedAccount").value;
  if (!checkAccId) {
    alert("Không tìm thấy ID tài khoản.");
    return;
  }

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id == checkAcc) {
      if (accounts[i].role === "user") {
        document.getElementById("ui1").innerHTML = `
     <h3>Nhập thông tin sinh viên</h3>
        <table>
          <tr>
            <th><label for="mySelect">Tên sinh viên</label></th>
            <td>${accounts[i].name}</td>
          </tr>
          <tr>
            <th><label for="mySelect">Khoa</label></th>
            <td><input type="text" placeholder="Khoa" id="faculty" /></td>
          </tr>
          <tr>
            <th><label for="mySelect">Lớp</label></th>
            <td><input type="text" placeholder="Lớp" id="grade" /></td>
          </tr>
          <tr>
            <th><label for="mySelect">Điểm trung bình</label></th>
            <td>
              <input type="number" placeholder="Điểm trung bình" id="score" />
            </td>
          </tr>
          <tr>
            <th>
              <label for="mySelect">Ảnh đại diện</label>
            </th>
            <td>
              <input
                type="text"
                placeholder="Image URL"
                id="avatar"
              /><br /><br />
            </td>
          </tr>
        </table>
        <button class="btn btn-success" onClick="addStudent()">Lưu</button>
            `;
      } else if (accounts[i].role === "admin") {
        document.getElementById("ui1").innerHTML = `
        <h3>Nhập thông tin giảng viên</h3>
        <table>
          <tr>
            <th><label for="mySelect">Tên giảng viên</label></th>
            <td>${accounts[i].name}</td>
          </tr>
          <tr>
            <th><label for="mySelect">Khoa</label></th>
            <td><input type="text" placeholder="Khoa" id="faculty" /></td>
          </tr>
          <tr>
            <th>
              <label for="mySelect">Ảnh đại diện</label>
            </th>
            <td>
              <input type="text" placeholder="Image URL" id="avatar" />
            </td>
          </tr>
        </table>
        <button class="btn btn-success" onClick="addTeacher()">Lưu</button>
          `;
      }
    }
  }
}

navigateToHome();
