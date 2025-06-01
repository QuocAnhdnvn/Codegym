/* Bài tập sau giờ
Cho một mảng [1,7,5,9,2,6]
- In ra các phần tử trong mảng
- In ra các phần tử chẵn trong mảng
- In ra các phần tử tại vị trí chẵn trong mảng
- In ra tổng các phần tử chẵn trong mảng
- In ra tổng các phần tử >10 trong mảng
- In ra tổng các phần tử chia 7 dư 2 trong mảng
- In ra max của các phần tử chẵn mảng
- In ra lớn nhất của mảng
- In ra số lượng các phần tử chia hết cho 5 trong mảng
- In ra trung bình các phần tử chia hết cho 5 trong mảng
- * Tìm phần tử lớn thứ 2 trong mảng
*/

let array = [1, 7, 5, 9, 2, 6];

// - In ra các phần tử trong mảng
console.log("Câu 1:");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// - In ra các phần tử chẵn trong mảng
console.log("");
console.log("Câu 2:");
for (let i2 = 0; i2 < array.length; i2++) {
  if (array[i2] % 2 == 0) {
    console.log(array[i2]);
  }
}

// - In ra các phần tử tại vị trí chẵn trong mảng
console.log("");
console.log("Câu 3:");
for (let i3 = 0; i3 < array.length; i3++) {
  if (i3 % 2 == 0) {
    console.log(array[i3]);
  }
}

// In ra tổng các phần tử chẵn trong mảng
console.log("");
console.log("Câu 4:");
let sum = 0;
for (let i4 = 0; i4 < array.length; i4++) {
  if (array[i4] % 2 == 0) {
    sum = sum + array[i4];
  }
}
console.log(sum);

// - In ra tổng các phần tử >10 trong mảng
console.log("");
console.log("Câu 5:");
let sum2 = 0;
for (let i5 = 0; i5 < array.length; i5++) {
  if (array[i5] < 10) {
    sum2 = sum2 + array[i5];
  }
}
console.log(sum2);

//- In ra tổng các phần tử chia 7 dư 2 trong mảng
console.log("");
console.log("Câu 6:");
let sum3 = 0;
for (let i6 = 0; i6 < array.length; i6++) {
  if (array[i6] % 7 == 2) {
    sum3 = sum3 + array[i6];
  }
}
console.log(sum3);

// - In ra max của các phần tử chẵn mảng
console.log("");
console.log("Câu 7:");
let max = undefined;
for (let i7 = 0; i7 < array.length; i7++) {
  if (max == undefined) {
    if (array[i7] % 2 == 0) {
      max = array[i7];
    }
  } else {
    if (array[i7] % 2 == 0 && array[i7] > max) {
      max = array[i7];
    }
  }
}

console.log(max);

// - In ra số lớn nhất của mảng
console.log("");
console.log("Câu 8:");
let max2 = undefined;
for (let i8 = 0; i8 < array.length; i8++) {
  if (max2 == undefined) {
    max2 = array[i8];
  } else {
    if (array[i8] > max2) {
      max2 = array[i8];
    }
  }
}
console.log(max2);

// - In ra số lượng các phần tử chia hết cho 5 trong mảng
console.log("");
console.log("Câu 9:");
let counts8 = 0;
for (let i9 = 0; i9 < array.length; i9++) {
  if (array[i9] % 5 == 0) {
    counts8++;
  }
}
console.log(counts8);

// - In ra trung bình các phần tử chia hết cho 5 trong mảng
console.log("");
console.log("Câu 10:");
let sum10 = 0;
for (let i10 = 0; i10 < array.length; i10++) {
  if (array[i10] % 5 == 0) {
    sum10 = sum10 + array[i10];
  }
}

let avg;
if (counts8 == 0) {
  avg = 0;
} else {
  avg = sum10 / counts8;
}
console.log(avg);

// - * Tìm phần tử lớn thứ 2 trong mảng
console.log("");
console.log("Câu 11:");
// let array2 = array.slice();
// let max10 = 0;
// let vitri = 0;
// for (let i11 = 0; i11 < array2.length; i11++) {
//   if (array[i11] > max10) {
//     max10 = array2[i11];
//     vitri = i11;
//   }
// }
// array2.splice(vitri, 1);
// let max11 = 0;
// for (let i12 = 0; i12 < array2.length; i12++) {
//   if (array2[i12] > max11) {
//     max11 = array2[i12];
//   }
// }
// console.log(max11);

let max10 = array[0];
let max10_2 = -Infinity;
for (let i11 = 0; i11 < array.length; i11++) {
  if (array[i11] > max10) {
    max10_2 = max10;
    max10 = array[i11];
  } else if (max10_2 < array[i11] && max10 > array[i11]) {
    max10_2 = array[i11];
  }
}

console.log("Cach 1: " + max10_2);

let max11 = array[0];
for (let i12 = 0; i12 < array.length; i12++) {
  if (array[i12] > max11) {
    max11 = array[i12];
  }
}

let max11_2 = -Infinity;
for (let i13 = 0; i13 < array.length; i13++) {
  if (array[i13] > max11_2 && array[i13] < max11) {
    max11_2 = array[i13];
  }
}
console.log("Cach 2: " + max11_2);
