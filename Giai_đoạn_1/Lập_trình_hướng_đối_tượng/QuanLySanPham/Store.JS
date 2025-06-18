class Store {
  id;
  name;
  listProduct;

  constructor(id, name) {
    let p1 = new Product(1, "Bánh Mỳ", 3000, 30);
    let p2 = new Product(2, "Kẹo", 3500, 30);
    this.id = id;
    this.name = name;
    this.listProduct = [p1, p2];
  }
}
