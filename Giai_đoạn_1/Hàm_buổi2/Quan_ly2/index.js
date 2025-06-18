// CRUD: tạo, đọc, sửa, xóa
// Đọc

let productNames = [];

function add() {
    let newData = document.getElementById("newProduct").value;
    productNames.push(newData);
    getAll();
    document.getElementById("newProduct").value = '';
}

function remove(index) {
    let isConfirm = confirm("Are you sure?");
    if (isConfirm) {
        productNames.splice(index, 1);
        getAll();
    }
}

function edit(index) {
    let newData = prompt("Enter new name " + productNames[index]);
    if (newData) {
        productNames[index] = newData;
        getAll();
    }
}

function getAll() {
    let html = '';
    for (let i = 0; i < productNames.length; i++) {
        html += `
           <tr>
                <td>${productNames[i]}</td>
                <td><button onClick=edit(${i})>Edit</button></td>
                <td><button onClick=remove(${i})>Delete</button></td>
            </tr>   
        `
    }
    document.getElementById("data").innerHTML = html;
}


getAll();



// Tạo 1 ô input cho phép người dùng tìm kiếm theo tên (Nên tạo 1 mảng mới chứa dữ liệu tìm kiếm)
// Tìm gần đúng
// Nhập đến đâu lọc dữ liệu đến đó


// Edit không đùng prompt mà dùng html