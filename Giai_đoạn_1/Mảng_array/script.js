/* Array (Mảng): là biến đặc biệt chứa các dữ "liệu liên quan đến nhau"

Cách khai báo:
   let <ten_mang> = [<phan_tu>, <phan_tu_2>,....]
   let scores = new Array(4, 5, 10, 0); // Cách khai báo khác (ít sử dụng) 
   
- Chỉ số mảng (index): Vị trí của các giá trị trong mảng bắt đầu từ 0
- Phần tử (element): là các giá trị trong mảng
- Cách truy xuất phần tử trong mảng: <ten_mang>[<index>]
- Cách gán lại giá trị cho 1 phần tử trong mảng: <ten_mang>[<vi_tri] = <giá trị muốn gán lại>
- Độ dài mảng (length): Số lượng phần tử có trong mảng

Note:
- Trong JS thì các phần tử không cần cùng kiểu dữ liệu
   */

/*
Hoàn thành các bài sau: (30p)
Cho một mảng [1,7,5,9,2,6,7,9,7]
- In ra các phần tử trong mảng.
- In ra các phần tử chẵn trong mảng.
- In ra các phần tử tại vị trí chẵn trong mảng.
- Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng.*/

/* Bài làm 1
//Cho một mảng [1,7,5,9,2,6,7,9,7]
let numberArray = [1, 7, 5, 9, 2, 6, 7, 9, 7];

//- In ra các phần tử trong mảng.
for (let y = 0; y < numberArray.length; y++) {
  console.log(numberArray[y]);
}

// - In ra các phần tử chẵn trong mảng.
for (let i = 0; i < numberArray.length; i++) {
  if (+numberArray[i] % 2 == 0) {
    console.log(numberArray[i]);
  }
}

// - In ra các phần tử tại vị trí chẵn trong mảng.
for (let j = 0; j < numberArray.length; j++) {
  if (j % 2 == 0) {
    console.log(numberArray[j]);
  }
}

// - Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng.
let k = +prompt("Hãy nhập số muốn tìm");
let counts = 0;
for (let x = 0; x < numberArray.length; x++) {
  if (numberArray[x] == k) {
    counts++;
  }
}
console.log(counts);*/

// Các hàm tương tác với mãng: CRUD CRUD (Create, Read, Update, Delete) các phần tử trong mảng.

/*

push(): Thêm phần tử vào cuối mảng
// unshift (): thêm vào đầu mãng
pop(): Xóa phần tử ở cuối mảng
// shift(): Xoá phần tử đầu mãng
concat(): Nối các mảng với nhau
join(): Tạo ra chuỗi chứa các phần tử từ mảng
splice(): Thêm, xóa, sửa
*/

let names = ["Ling", "Phú", "C04", "Abc"]; // array

let names2 = ["TD", "VL", "C"];
// Hàm concat sẻ tạo một mãng mới mà không ảnh hưởng đến mãng ban đầu nên cần phải hứng mãng mới này.
let names3 = names.concat(names2);

// Tương tự hàm concat thì hàm join cũng sẻ tạo ta một chuổi mới không ảnh hưởng đến mãng củ, vì vậy cũng cần hứng chuỗi mới này.
let str = names.join();
console.log("Str: " + str);

// names.splice(1, 1); // (<vị trị bắt đầu>, <số lượng phần tử muốn xóa>) // xóa
// names.splice(1, 0, "Lộc"); // chèn
// names.splice(2, 0, "Bình");
names.splice(2, 1, "Bình"); // Sửa
console.log(names);

// map, forEach, filter, find, findIndex, reduce,...: hàm duyệt mảng (Tìm hiểu thêm)
names.map((item) => console.log(item));

// Làm luyện tập 1
