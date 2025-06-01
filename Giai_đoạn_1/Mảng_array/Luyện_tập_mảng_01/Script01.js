/* Bài 1
Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.*/

console.log("Bài 1:");
let array1 = [1, 3, 5, 4, 6, 10, 62, 23, 24, 48];
let counts10 = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] >= 10) {
    console.log(array1[i]);
    counts10++;
  }
}
console.log("Có " + counts10 + " số lớn hơn 10");

/* Bài 2
Viết chương trình khởi tạo một mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó. */
console.log("");
console.log("Bài 2:");
let max1 = 0;
let vitri = 0;
for (let j = 0; j < array1.length; j++) {
  if (array1[j] > max1) {
    max1 = array1[j];
    vitri = j;
  }
}
console.log("Giá trị lớn nhất là " + max1);
console.log("Vị trí của giá trị lớn nhất là : " + vitri);

/*Bài 3
Viết chương trình khởi tạo một mảng số nguyên. Hiển thị giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng. */
console.log("");
console.log("Bài 3:");

let array2 = [1, 4, 6, 5, 9, 13, 54, 65, 72, 44, 5];
let sum1 = 0;
let max2 = 0;
for (let i1 = 0; i1 < array2.length; i1++) {
  sum1 = sum1 + array2[i1];
  if (array2[i1] > max2) {
    max2 = array2[i1];
  }
}
console.log("Gía trị lớn nhất là : " + max2);
console.log("Giá trị trung bình: " + sum1 / array2.length);

/*Bài 4
Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng. */
console.log("");
console.log("Bài 4:");

let array3 = [];
for (let j2 = 0; j2 < array2.length; j2++) {
  array3.push(array2[array2.length - j2 - 1]);
}
console.log(array3);

/*Bài 5
Viết chương trình đếm số nguyên âm trong một chuỗi. */

let array4 = [1, -3, -5, 6, -9, 15, -56, 0, 12, -9];
let counts5 = 0;
for (let j3 = 0; j3 < array4.length; j3++) {
  if (array4[j3] < 0) {
    counts5++;
  }
}
console.log(counts5);

/*
Bài 6
Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử. Nhập hoặc tạo một phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng không.

Nếu V thuộc mảng, in ra: "V is in the array".
Nếu không, in ra: "V is not in the array". */
console.log("");
console.log("Bài 6:");

let v = +prompt("Nhập số V muốn tìm");
let timV = 0;
for (let i6 = 0; i6 < array4.length; i6++) {
  if (array4[i6] == v) {
    timV++;
  }
}
if (timV > 0) {
  console.log("V is in the array");
} else {
  console.log("V is not in the array");
}
