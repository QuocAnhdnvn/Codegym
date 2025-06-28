function inputa() {
  let tu1 = +document.getElementById("tu1").value;
  let mau1 = +document.getElementById("mau1").value;
  let tu2 = +document.getElementById("tu2").value;
  let mau2 = +document.getElementById("mau2").value;
  let errors = "";

  if (isNaN(tu1) || !Number.isInteger(tu1)) {
    errors += `<p>Tử số thứ nhất không phải là số nguyên, vui lòng kiểm tra lại.</p>`;
  }
  if (isNaN(mau1) || !Number.isInteger(mau1)) {
    errors += `<p>Mẫu số thứ nhất không phải là số nguyên, vui lòng kiểm tra lại.</p>`;
  }
  if (mau1 == 0) {
    errors += `<p>Mẫu số thứ nhất = 0, vui lòng kiểm tra lại.</p>`;
  }
  if (isNaN(tu2) || !Number.isInteger(tu2)) {
    errors += `<p>Tử số thứ hai không phải là số nguyên, vui lòng kiểm tra lại.</p>`;
  }
  if (isNaN(mau2) || !Number.isInteger(mau2)) {
    errors += `<p>Mẫu số thứ hai không phải là số nguyên, vui lòng kiểm tra lại.</p>`;
  }
  if (mau2 == 0) {
    errors += `<p>Mẫu số thứ hai = 0, vui lòng kiểm tra lại.</p>`;
  }

  if (errors) {
    document.getElementById("hienthi").innerHTML = errors;
    return;
  }

  if (tu1 * mau2 === tu2 * mau1) {
    document.getElementById("hienthi").innerText = "Hai phân số bằng nhau";
  } else {
    document.getElementById("hienthi").innerText =
      "Hai phân số không bằng nhau";
  }
}
