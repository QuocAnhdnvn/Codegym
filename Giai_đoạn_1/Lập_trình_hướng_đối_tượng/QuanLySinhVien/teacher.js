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
