/* VD Hàm: function có biến show(a,b) nhận hai giá trị a và b
Hàm (Function) : Là một nhóm các câu lệnh thực hiện một nhiệm vụ nhất định.
Tên gọi khác: Method (Phương thức), function
Tác dụng của hàm:
 - Tái sử dụng code.
 - Đơn giản hóa code.
 - Tránh lặp code.
 - Dễ dàng tổ chức code, giúp dễ bảo trì trong tương lai.
Một số hàm có sẵn: console.log(), Math.random(), alert().
Các biểu thức hàm thường có dâu ()

// Khai báo hàm: định nghỉa hàm đó
function <tên hàm>(){}

Note : Tên hàm được viết theo kiểm camelcase

<tên hàm>()
có thể dùng cả trước và sau khi khai báo

*/

// function go() {
//   alert("Hello world");
// }

// go();

// Tham số truyền vào - làm các biến trong dấu ngoặc tròn

// function dodo(name) {
//   alert("Hello " + name);
// }
// "Lâm", "Quần" là đối số truyền vào sử dụng để thay cho tham số truyền vào
// Số lượng đối sẻ cần bằng số lượng tham số
// Có thể không giới hạn đối số
// dodo("Lâm");

// return: trả về
// Một hàm chỉ trả về 1 giá trị

// function tichTuADenB(a, b) {
//   let tich = 1;
//   for (let i = a; i <= b; i++) {
//     tich *= i;
//   }
//   return tich;
// }
// let a = 5;
// let b = 9;
// let c = tichTuADenB(a, b);
// console.log(c);

// break dừng vòng lặp, return dừng hàm

function show() {
  alert("Hello");
}

function tinhTong(a, b) {
  let tong = a + b;
  return tong;
}

let a = 3;
let b = 9;
// let c = tinhTong(a, b);
console.log(tinhTong(a, b));

function footToMeter(foot) {
  let meter;
  meter = 0.305 * foot;
  return meter;
}

let foot = 10;
console.log(footToMeter(foot));

function meterToFoot(m) {
  let f;
  f = 3.279 * m;
  return f;
}

let m = 20;
console.log(meterToFoot(m));

function isPrime(number) {
  for (let i = 1; i <= number; i++) {
    let counts = 0;
    if (number % i == 0) {
      counts++;
    }
    if (counts % i == 0) {
      return number;
    }
  }
}
let number = 97;
console.log(isPrime(number));

/*
Block scope : Các biến được khai báo trong các khối không phải funcion

Function scope : Các biến có phạm vi trong cùng một function

Var: Function scope
let: Block scope 
*/
// Luyện tập 1 về hàm
