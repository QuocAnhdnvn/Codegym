class HCN {
  dai;
  rong;

  constructor(nhapDai, nhapRong) {
    this.dai = nhapDai;
    this.rong = nhapRong;
  }

  chuVi() {
    let cv = (this.dai + this.rong) * 2;
    return `<h2>Chu vi là : ${cv}</h2>`;
    // console.log("Chu vi là: ", cv);
  }

  dienTich() {
    let dientich = this.dai * this.rong;
    return `<h2>Diện tích là : ${dientich}</h2>`;
    // console.log("Diện tích là: ", dientich);
  }
}

function tinhToan() {
  let nhapDai = parseFloat(document.getElementById("dai").value.trim());
  let nhapRong = parseFloat(document.getElementById("rong").value.trim());

  if (isNaN(nhapDai) || isNaN(nhapRong)) {
    document.getElementById("hienthi").innerHTML = "";
    return;
  }
  if (
    !Number.isInteger(nhapDai) ||
    !Number.isInteger(nhapRong) ||
    nhapDai <= 0 ||
    nhapRong <= 0
  ) {
    document.getElementById(
      "hienthi"
    ).innerHTML = `<h2>Vui lòng nhập số nguyên dương lớn hơn 0.</h2>`;
    return;
  }

  let s1 = new HCN(nhapDai, nhapRong);
  document.getElementById("hienthi").innerHTML = s1.chuVi() + s1.dienTich();
}
