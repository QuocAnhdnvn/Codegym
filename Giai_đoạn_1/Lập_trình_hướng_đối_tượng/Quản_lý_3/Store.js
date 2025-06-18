class Store {
    id;
    name;
    listProduct;

    constructor(id, name) {
        this.listProduct = [];
        this.id = id;
        this.name = name;
    }

    getListSearch(nameSearch, priceStart, priceEnd) {
        let listOutput = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            let product = this.listProduct[i];
            if (product.name.toLowerCase().includes(nameSearch.toLowerCase())) {
                listOutput.push(product);
            }
        }

        let listOutput2 = []
        // mảng listOutput đã được lọc theo name => lọc tiếp theo khoảng giá 
        for (let i = 0; i < listOutput.length; i++) {
            let product = listOutput[i];
            if (product.price >= priceStart && product.price <= priceEnd) {
                listOutput2.push(product);
            }
        }


        return listOutput2;
    }

    getListProducts() {
        return this.listProduct;
    }

    add(newProduct) { // new Product(1, "Bánh mì", 3000, 30);
        this.listProduct.push(newProduct);
        this.saveDataInStorage();
    }

    remove(id) {
        // Tìm vị trí mà sản phẩm id người dùng truyền vào đang đứng
        let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i]; // // new Product(1, "Bánh mì", 3000, 30);
            if (p.id == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            alert("Không có sản phẩm này");
        } else {
            // Confirm
            this.listProduct.splice(index, 1);
        }
        this.saveDataInStorage();
    }

    getProductById(id) {
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (id == p.id) {
                return p;
            }
        }
    }

    update(id, newProduct) {
        // Tìm vị trí mà sản phẩm id người dùng truyền vào đang đứng
        let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i]; // // new Product(1, "Bánh mì", 3000, 30);
            if (p.id == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            alert("Không có sản phẩm này");
        } else {
            this.listProduct[index] = newProduct;
        }
        this.saveDataInStorage();
    }

    saveDataInStorage() {
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }

    getDateInStorage() {
        let data = localStorage.getItem("listProduct"); // null or chuỗi data
        if (data) {
            // "[{...}, {...}]" => [{...}, {...}]
            this.listProduct = JSON.parse(data);
        } else {
            this.listProduct = [];
            this.saveDataInStorage();
        }
    }
}