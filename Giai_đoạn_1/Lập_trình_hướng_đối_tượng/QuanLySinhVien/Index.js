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
                    <td>${student.grade}</td>
                    <td>${student.score}</td>
                    <td><button onClick="deletestudent(${student.id})">Xóa</button></td>
                    <td><button onClick="navigateToUpdate(${student.id})">Sửa</button></td>
                </tr>
        `;
  }
  document.getElementById("list_student").innerHTML = html;
}

function search() {
  let nameSearch = document.getElementById("search-name").value;
  let gradeSearch = document.getElementById("search-grade").value;
  let scoreStart = +document.getElementById("score-start").value;
  let scoreEnd = +document.getElementById("score-end").value;
  if (!scoreStart) scoreStart = -Infinity;
  if (!scoreEnd) scoreEnd = Infinity;
  let list = myGrade.getListSearch(
    nameSearch,
    gradeSearch,
    scoreStart,
    scoreEnd
  );
  getAll(list);
}

function navigateToHome() {
  document.getElementById("ui").innerHTML = `
      <h2>Danh sách sinh viên</h2>
      <input type="text" placeholder="Tìm kiếm" id="search-name" oninput="search()"
      />
      <input type="text" placeholder="Tìm kiếm" id="search-grade" oninput="search()"
      />
      <input
        type="number" placeholder="Điểm tối thiểu" id="score-start" oninput="search()"
      />
      <input
        type="number" placeholder="điểm tối đa" id="score-end" oninput="search()"
      />
      <br />
      <br />
      <table border="1">
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>grade</th>
          <th>score</th>
          <th colspan="2">Action</th>
        </tr>
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
  let grade = document.getElementById("grade").value;
  let score = document.getElementById("score").value;
  let p = new Student(id, name, grade, score);
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
  let grade = document.getElementById("grade").value;
  let score = document.getElementById("score").value;
  let p = new Student(id, name, grade, score);
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
            <input type="text" placeholder="Name" id="name" value="${student.name}">
            <br>
            <br>
            <input type="text" placeholder="grade" id="grade" value="${student.grade}">
            <br>
            <br>
            <input type="text" placeholder="score" id="score" value="${student.score}">
            <br>
            <br>
            <button onClick="updateStudent(${id})">Sửa</button>
        </div>
    `;
}

function navigateToAdd() {
  document.getElementById("ui").innerHTML = `
    <h2>Lưu thông tin học sinh</h2>
    <div>
            <input type="text" placeholder="Name" id="name">
            <br>
            <br>
            <input type="text" placeholder="grade" id="grade">
            <br>
            <br>
            <input type="text" placeholder="Score" id="score">
            <br>
            <br>
            <button onClick="addStudent()">Lưu</button>
        </div>
    `;
}

navigateToHome();
