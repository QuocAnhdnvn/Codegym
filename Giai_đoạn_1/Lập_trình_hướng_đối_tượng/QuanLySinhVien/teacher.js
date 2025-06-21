class Teacher {
  id;
  name;
  faculty;
  avatar;

  constructor(id, name, faculty, avatar = "") {
    this.id = id;
    this.name = name;
    this.faculty = faculty;
    this.avatar = avatar;
  }
}

function addTeacher() {
  myGrade.getDataInStorage();
  let list = myGrade.getListTeacher();

  let id = list.length + 1;
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
  let faculty = document.getElementById("faculty").value;
  let avatar = document.getElementById("avatar").value;
  let p = new Teacher(id, name, faculty, avatar);
  myGrade.add(p);
  navigateToHome();
}
