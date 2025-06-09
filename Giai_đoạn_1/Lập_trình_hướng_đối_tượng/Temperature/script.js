let output;
class Temperature {
  doC;
  constructor(nhapDoC) {
    this.doC = nhapDoC;
  }
  DoK() {
    let doK = this.doC + 273;
    return doK;
  }
  DoF() {
    let doF = this.doC * 1.8 + 32;
    return doF;
  }
}

function tinhToan() {
  let nhapDoC = parseFloat(document.getElementById("doC").value.trim());
  if (isNaN(nhapDoC) || nhapDoC <= -273) {
    document.getElementById(
      "hienthi"
    ).innerHTML = `<Br><h2>Nhập sai giá trị độ C, hãy nhập lại</h2>`;
    return;
  }
  let s1 = new Temperature(nhapDoC);
  document.getElementById("hienthi").innerHTML = `
  <h3>Nhiệt độ theo độ K là ${s1.DoK()}.</h3>
  <Br>
  <h3>Nhiệt độ theo độ F là ${s1.DoF()}.</h3>
  `;
}
