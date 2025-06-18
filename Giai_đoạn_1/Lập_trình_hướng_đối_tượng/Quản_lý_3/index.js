let myStore = new Store(1, "Shopee");
console.log("myStore", myStore);

function getAll(list) { // nhận vào 1 mảng product => có gì thì hiển thị đó
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        let product = list[i]; // lấy ra từng product
        html += `
                 <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td><button onClick="deleteProduct(${product.id})">Xóa</button></td>
                    <td><button onClick="navigateToUpdate(${product.id})">Sửa</button></td>
                </tr>
        `
    }
    document.getElementById("list_products").innerHTML = html;
}

function search() {
    let nameSearch = document.getElementById("search-input").value;
    let priceStart = +document.getElementById("price-start").value;
    let priceEnd = +document.getElementById("price-end").value;
    if (!priceStart) priceStart = -Infinity;
    if(!priceEnd) priceEnd = Infinity;
    let list = myStore.getListSearch(nameSearch, priceStart, priceEnd);
    getAll(list);
}

function navigateToHome() {
    document.getElementById("ui").innerHTML = `
    <h2>Danh sách sản phẩm</h2>
    <input type="text" placeholder="Tìm kiếm" id="search-input" oninput="search()">
    <input type="number" placeholder="Giá bắt đầu" id="price-start" oninput="search()">
    <input type="number" placeholder="Giá kết thúc" id="price-end" oninput="search()">
    <br>
    <br>
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th colspan="2">Action</th>
            </tr>
            <tbody id="list_products">
            </tbody>
        </table>
    `
    myStore.getDateInStorage();
    let list = myStore.getListProducts(); // Mảng product
    console.log("list", list);
    getAll(list);
}

function addProduct() {
    let list = myStore.getListProducts();

    let id = list.length + 1;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let p = new Product(id, name, price, quantity);
    myStore.add(p);
    navigateToHome();
}

function deleteProduct(id) {
    let isConfirm = confirm("Bạn chắc chắn chứ ?");
    if (isConfirm) {
        myStore.remove(id);
        navigateToHome();
    }
}

function updateProduct(id) {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let p = new Product(id, name, price, quantity);
    myStore.update(id, p);
    navigateToHome();
}

function navigateToUpdate(id) { // hiển hị dữ liệu cũ
    let product = myStore.getProductById(id); // new Product(1, "Bánh mì", 3000, 30);
    document.getElementById("ui").innerHTML = `
    <h2>Sửa sản phẩm</h2>
    <div>
            <input type="text" placeholder="Name" id="name" value="${product.name}">
            <br>
            <br>
            <input type="text" placeholder="Price" id="price" value="${product.price}">
            <br>
            <br>
            <input type="text" placeholder="Quantity" id="quantity" value="${product.quantity}">
            <br>
            <br>
            <button onClick="updateProduct(${id})">Sửa</button>
        </div>
    `
}

function navigateToAdd() {
    document.getElementById("ui").innerHTML = `
    <h2>Lưu sản phẩm</h2>
    <div>
            <input type="text" placeholder="Name" id="name">
            <br>
            <br>
            <input type="text" placeholder="Price" id="price">
            <br>
            <br>
            <input type="text" placeholder="Quantity" id="quantity">
            <br>
            <br>
            <button onClick="addProduct()">Lưu</button>
        </div>
    `
}

navigateToHome();


// Hoàn thành CRUD như Demo
// (tương ứng với dự án cuối module)
/* 
Nâng cao 
lưu localstorage
Tìm kiếm sản phẩm theo:
Khoảng giá
Tên gần đúng
Khoảng số lượng
*/


/*

Dự án cuối module:
Quản lý: tương tự demo, tìm hiểu thêm css, quản lý thêm nhiều chủ thể hơn
- nếu bí ý tưởng => hỏi Ning

Mini game: bắn bóng, flappy bird (tự chọn js,html,css)
*/