class Grade {
  id;
  name;
  listStudent;
  listTeacher;

  constructor(id, name) {
    this.listStudent = [];
    this.listTeacher = [];
    this.id = id;
    this.name = name;
  }

  getListSearch(nameSearch, facultySearch, gradeSearch, scoreStart, scoreEnd) {
    let listOutput = [];
    for (let i = 0; i < this.listStudent.length; i++) {
      let student = this.listStudent[i];
      if (student.name.toLowerCase().includes(nameSearch.toLowerCase())) {
        listOutput.push(student);
      }
    }

    let listOutput1 = [];
    for (let i = 0; i < this.listStudent.length; i++) {
      let student = this.listStudent[i];
      if (student.faculty.toLowerCase().includes(facultySearch.toLowerCase())) {
        listOutput1.push(student);
      }
    }

    let listOutput2 = [];
    for (let i = 0; i < listOutput.length; i++) {
      let student = listOutput[i];
      if (student.grade.toLowerCase().includes(gradeSearch.toLowerCase())) {
        listOutput2.push(student);
      }
    }

    let listOutput3 = [];
    // mảng listOutput đã được lọc theo name => lọc tiếp theo khoảng giá
    for (let i = 0; i < listOutput1.length; i++) {
      let student = listOutput1[i];
      if (student.score >= scoreStart && student.score <= scoreEnd) {
        listOutput3.push(student);
      }
    }

    return listOutput3;
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
    let index = -1;
    for (let i = 0; i < this.listStudent.length; i++) {
      let p = this.listStudent[i];
      if (p.id == id) {
        index = i;
        break;
      }
    }

    if (index == -1) {
      alert("Không có sinh viên này");
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

  getListTeacher(nameSearch, facultySearch) {
    let listOutput = [];
    for (let i = 0; i < this.listTeacher.length; i++) {
      let teacher = this.listTeacher[i];
      if (teacher.name.toLowerCase().includes(nameSearch.toLowerCase())) {
        listOutput.push(teacher);
      }
    }

    let listOutput1 = [];
    for (let i = 0; i < listOutput.length; i++) {
      let teacher = listOutput[i];
      if (teacher.faculty.toLowerCase().includes(facultySearch.toLowerCase())) {
        listOutput1.push(teacher);
      }
    }

    return listOutput1;
  }

  addTeacher(newTeacher) {
    this.listTeacher.push(newTeacher);
    this.saveDataInStorage();
  }

  getListTeacher() {
    return this.listTeacher;
  }

  saveDataInStorage() {
    localStorage.setItem("listStudent", JSON.stringify(this.listStudent));
    localStorage.setItem("listTeacher", JSON.stringify(this.listTeacher));
  }

  getDataInStorage() {
    let studentData = localStorage.getItem("listStudent");
    if (studentData) {
      this.listStudent = JSON.parse(studentData);
    } else {
      this.listStudent = [];
      this.saveDataInStorage();
    }

    let teacherData = localStorage.getItem("listTeacher");
    if (teacherData) {
      this.listTeacher = JSON.parse(teacherData);
    } else {
      this.listTeacher = [];
      this.saveDataInStorage();
    }
  }
}
