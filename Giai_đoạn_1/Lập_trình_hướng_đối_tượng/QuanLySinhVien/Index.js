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
  let name = document.getElementById("name").value;
  let faculty = document.getElementById("faculty").value;
  let grade = document.getElementById("grade").value;
  let score = document.getElementById("score").value;
  let avatar = document.getElementById("avatar").value;
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
    <h2>Lưu thông tin học sinh</h2>
    <div>
      <input type="text" placeholder="Name" id="name"><br><br>
      <input type="text" placeholder="Faculty" id="faculty"><br><br>
      <input type="text" placeholder="Grade" id="grade"><br><br>
      <input type="number" placeholder="Score" id="score"><br><br>
      <input type="text" placeholder="Image URL" id="avatar"><br><br>
      <button class="btn btn-success" onClick="addStudent()">Lưu</button>
    </div>
  `;
}

navigateToHome();
