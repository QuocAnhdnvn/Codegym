let tbhs1;
let tbhs2;

class Student1 {
  ten1;
  tuoi1;
  diem1;

  constructor(nhapTen1, nhapTuoi1, nhapDiem1) {
    this.ten1 = nhapTen1;
    this.tuoi1 = nhapTuoi1;
    this.diem1 = nhapDiem1;
  }
  diemTB1() {
    let counts1 = 0;
    let sum1 = 0;
    for (let i = 0; i < this.diem1.length; i++) {
      counts1++;
      sum1 += this.diem1[i];
    }
    let tb1 = sum1 / counts1;
    return (tbhs1 = tb1.toFixed(2));
  }
}

class Student2 {
  ten2;
  tuoi2;
  diem2;

  constructor(nhapTen2, nhapTuoi2, nhapDiem2) {
    this.ten2 = nhapTen2;
    this.tuoi2 = nhapTuoi2;
    this.diem2 = nhapDiem2;
  }
  diemTB2() {
    let counts2 = 0;
    let sum2 = 0;
    for (let i = 0; i < this.diem2.length; i++) {
      counts2++;
      sum2 += this.diem2[i];
    }
    let tb2 = sum2 / counts2;
    return (tbhs2 = tb2.toFixed(2));
  }
}

let s1;
function nhap1() {
  let nhapTen1 = document.getElementById("ten1").value.trim();
  let nhapTuoi1 = parseFloat(document.getElementById("tuoi1").value.trim());
  let nhapDiem1 = document.getElementById("diem1").value.split(",").map(Number);

  s1 = new Student1(nhapTen1, nhapTuoi1, nhapDiem1);
  s1.diemTB1();
}

let s2;
function nhap2() {
  let nhapTen2 = document.getElementById("ten2").value.trim();
  let nhapTuoi2 = parseFloat(document.getElementById("tuoi2").value.trim());
  let nhapDiem2 = document.getElementById("diem2").value.split(",").map(Number);

  s2 = new Student2(nhapTen2, nhapTuoi2, nhapDiem2);
  s2.diemTB2();
}

function tinhToan() {
  if (tbhs1 > tbhs2) {
    document.getElementById(
      "hienthi"
    ).innerHTML = `<h1> Học sinh ${s1.ten1} có điểm trung bình cao hơn học sinh ${s2.ten2} với điểm trung bình là ${tbhs1}</h1>`;
  } else if (tbhs2 > tbhs1) {
    document.getElementById(
      "hienthi"
    ).innerHTML = `<h1> Học sinh ${s2.ten2} có điểm trung bình cao hơn học sinh ${s1.ten1} với điểm trung bình là ${tbhs2}</h1>`;
  } else {
    document.getElementById(
      "hienthi"
    ).innerHTML = `<h1> Học sinh ${s2.ten2} và học sinh ${s1.ten1} có điểm trung bình bằng nhau là ${tbhs2}</h1>`;
  }
}
