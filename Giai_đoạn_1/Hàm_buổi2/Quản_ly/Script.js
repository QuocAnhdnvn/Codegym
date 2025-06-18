let productNames = [];

function addProduct() {
  const input = document.getElementById("NewProduct");
  const newProduct = input.value.trim();
  if (newProduct !== "") {
    productNames.push(newProduct);
    input.value = "";
    getAll();
  }
}

// function editProduct(index) {
//   document.getElementById(
//     showEdit
//   ).in.html = `    <input type="text" placeholder="New Product" id="edit" />
//     <button onclick="editProduct()">Add</button>`;
//   let newName = prompt("Enter new product name:" + productNames[index]);
//   if (newName !== null && newName.trim() !== "") {
//     productNames[index] = newName.trim();
//     getAll();
//   }
// }

function getAll() {
  let html = "";
  for (let i = 0; i < productNames.length; i++) {
    html += `
      <tr>
        <td>${productNames[i]}</td>
        <td>
          <button onclick="editProduct(${i})">Edit</button>
        </td>
        <td>
          <button onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>`;
  }
  document.getElementById("data").innerHTML = html;
  document.getElementById("showEdit").innerHTML = "";
}

function editProduct(index) {
  let showEdit = document.getElementById("showEdit");
  let currentName = productNames[index];

  showEdit.innerHTML = `
    <h3>Edit Product</h3>
    <input type="text" id="editInput" value="${currentName}" />
    <button onclick="saveEdit(${index})">Save</button>
    <button onclick="cancelEdit()">Cancel</button>
  `;
}

function saveEdit(index) {
  let input = document.getElementById("editInput");
  let newName = input.value.trim();
  if (newName !== "") {
    productNames[index] = newName;
    getAll();
  }
}

function cancelEdit() {
  document.getElementById("showEdit").innerHTML = "";
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    productNames.splice(index, 1);
    getAll();
  }
}

getAll();
