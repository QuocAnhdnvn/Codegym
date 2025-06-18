class Grade {
  id;
  name;
  listStudent;

  constructor(id, name) {
    this.listStudent = [];
    this.id = id;
    this.name = name;
  }

  getListSearch(nameSearch, gradeSearch, scoreStart, scoreEnd) {
    let listOutput = [];
    for (let i = 0; i < this.listStudent.length; i++) {
      let student = this.listStudent[i];
      if (student.name.toLowerCase().includes(nameSearch.toLowerCase())) {
        listOutput.push(student);
      }
    }

    let listOutput1 = [];
    for (let i = 0; i < listOutput.length; i++) {
      let student = listOutput[i];
      if (student.grade.toLowerCase().includes(gradeSearch.toLowerCase())) {
        listOutput1.push(student);
      }
    }

    let listOutput2 = [];
    // mảng listOutput đã được lọc theo name => lọc tiếp theo khoảng giá
    for (let i = 0; i < listOutput1.length; i++) {
      let student = listOutput1[i];
      if (student.score >= scoreStart && student.score <= scoreEnd) {
        listOutput2.push(student);
      }
    }

    return listOutput2;
  }

  getListStudent() {
    return this.listStudent;
  }

  add(newStudent) {
    // new Student(1, "NGuyễn văn A", 12A4, 100);
    this.listStudent.push(newStudent);
    this.saveDataInStorage();
  }

  remove(id) {
    // Tìm vị trí mà sản phẩm id người dùng truyền vào đang đứng
    let index = -1;
    for (let i = 0; i < this.listStudent.length; i++) {
      let p = this.listStudent[i];
      if (p.id == id) {
        index = i;
        break;
      }
    }

    if (index == -1) {
      alert("Không có sản phẩm này");
    } else {
      // Confirm
      this.listStudent.splice(index, 1);
    }
    this.saveDataInStorage();
  }

  getStudentById(id) {
    for (let i = 0; i < this.listStudent.length; i++) {
      let p = this.listStudent[i];
      if (id == p.id) {
        return p;
      }
    }
  }

  update(id, newStudent) {
    // Tìm vị trí mà sản phẩm id người dùng truyền vào đang đứng
    let index = -1;
    for (let i = 0; i < this.listStudent.length; i++) {
      let p = this.listStudent[i]; // // new Product(1, "Bánh mì", 3000, 30);
      if (p.id == id) {
        index = i;
        break;
      }
    }

    if (index == -1) {
      alert("Không có sinh viên này");
    } else {
      this.listStudent[index] = newStudent;
    }
    this.saveDataInStorage();
  }

  saveDataInStorage() {
    localStorage.setItem("listStudent", JSON.stringify(this.listStudent));
  }

  getDataInStorage() {
    let data = localStorage.getItem("listStudent");
    if (data) {
      this.listStudent = JSON.parse(data);
    } else {
      this.listStudent = [];
      this.saveDataInStorage();
    }
  }
}
