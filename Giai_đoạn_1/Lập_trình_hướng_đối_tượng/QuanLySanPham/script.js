let myStore = new Store(1, "Shoppe");

function getAll() {
  let list = myStore.listProduct();
  console.log("list", list);
  let html = ``;
  for (let i = 0; i < list.length; i++) {
    let product = list[1];
    html += `
     <th>1</th>
            <th>Bánh mỳ</th>
            <th>3000</th>
            <th>Loại 1</th>
            <th><button>Sửa</button></th>
            <th><button>Xoá</button></th>
    `;
  }
}
