class Student {
  id;
  name;
  faculty;
  grade;
  score;
  avatar;

  constructor(id, name, faculty, grade, score, avatar = "") {
    this.id = id;
    this.name = name;
    this.faculty = faculty;
    this.grade = grade;
    this.score = score;
    this.avatar = avatar;
  }
}
