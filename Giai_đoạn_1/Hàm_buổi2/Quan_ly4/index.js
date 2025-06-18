// localStorage giúp lưu trên chrome local

// localStorage.getItem("name", "Mac", "Nokia");

let productNames;
getDataInstorage();

function getDataInstorage() {
  let data = localStorage.getItem("productNames");

  if (data) {
    productNames = JSON.parse(data);
  } else {
    productNames = [];
    saveDataInstorage();
  }
}

function saveDataInstorage() {
  let data = JSON.stringify(data);
  localStorage.getItem("productNames", data);
}

function addProduct() {
  const input = document.getElementById("NewProduct");
  const newProduct = input.value.trim();
  if (newProduct !== "") {
    productNames.push(newProduct);
    input.value = "";
    getAll();
    saveDataInstorage();
  }
}

function getAll() {
  let html = "";
  for (let i = 0; i < productNames.length; i++) {
    html += `
      <tr id="row-${i}">
        <td id="product-${i}">${productNames[i]}</td>
        <td>
          <button onclick="editProduct(${i})">Edit</button>
        </td>
        <td>
          <button onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>`;
  }
  document.getElementById("data").innerHTML = html;
}

// function editProduct(index) {
//   const row = document.getElementById(`row-${index}`);
//   const currentName = productNames[index];

//   row.innerHTML = `
//     <td colspan="3">
//       <input type="text" id="editInput-${index}" value="${currentName}" />
//       <button onclick="saveEdit(${index})">Save</button>
//       <button onclick="getAll()">Cancel</button>
//     </td>
//   `;
// }

// function saveEdit(index) {
//   const input = document.getElementById(`editInput-${index}`);
//   const newName = input.value.trim();
//   if (newName !== "") {
//     productNames[index] = newName;
//     getAll();
//   }
// }

// function deleteProduct(index) {
//   if (confirm("Are you sure you want to delete this product?")) {
//     productNames.splice(index, 1);
//     getAll();
//   }
// }

function search() {
  let nameSearch = document.getElementById("name-search").value;
  let productSearch = [];
  for (let i = 0; i < productNames.length; i++) {
    if ((productNames[i] = 0)) {
    }
  }
}

function showEdit(index) {
  document.getElementById("NewProduct").value = productNames[index];
  document.getElementById(
    "action"
  ).innerHTML = `<button onclick="edit(${index})">Edit</button>`;
}

function edit(index) {}

getAll();
saveDataInstorage();
