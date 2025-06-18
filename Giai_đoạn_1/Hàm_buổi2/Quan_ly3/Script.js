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

function editProduct(index) {
  const row = document.getElementById(`row-${index}`);
  const currentName = productNames[index];

  row.innerHTML = `
    <td colspan="3">
      <input type="text" id="editInput-${index}" value="${currentName}" />
      <button onclick="saveEdit(${index})">Save</button>
      <button onclick="getAll()">Cancel</button>
    </td>
  `;
}

function saveEdit(index) {
  const input = document.getElementById(`editInput-${index}`);
  const newName = input.value.trim();
  if (newName !== "") {
    productNames[index] = newName;
    getAll();
  }
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    productNames.splice(index, 1);
    getAll();
  }
}

getAll();
