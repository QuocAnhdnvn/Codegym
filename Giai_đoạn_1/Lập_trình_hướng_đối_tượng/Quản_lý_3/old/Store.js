class Store {
  id;
  name;
  listProduct;

  constructor(id, name) {
    this.listProduct = [];
    this.id = id;
    this.name = name;
  }

  getListProducts() {
    return this.listProduct;
  }

  add(newProduct) {
    // new Product(1, "Bánh mì", 3000, 30);
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
    this.saveDataInStorage();
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
    localStorage.getItem("listProduct", JSON.stringify(this.listProduct));
  }

  getDataInStorage() {
    let data = localStorage.getItem("listProduct");
    if (data) {
    }
  }
}
