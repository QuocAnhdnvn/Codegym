function inputa() {
  let a = document.getElementById("a").value.split(",").map(Number);
  let b = [];

  if (a.length > 50) {
    alert("Vui lòng nhập chỉ nhập mãng có tối đa 50 phần tử");
    return;
  }

  for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i]) || !Number.isInteger(Number(a[i])) || a[i] < 0) {
      alert(`Giá trị ${a[i]} không phải là số nguyên, vui lòng nhập lại`);
      return;
    }
    document.getElementById("hienthia").innerText =
      "Mảng a đã nhập: " + a.join(", ");

    let isPrime = true;
    for (let j = 2; j < a[i]; j++) {
      if (a[i] % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && a[i] > 1) {
      b.push(a[i]);
    }
    document.getElementById("hienthib").innerText =
      "Cấc giá trì là số nguyên tố trong mãng a : " + b.join(", ");
  }
}
