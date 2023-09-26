class ShoppingList {
  static items = {};

  //Methods to create
  static users() {
    return Object.keys(this.items);
  }

  static list(n) {
    if (!this.items[n]) return [];
    else return this.items[n];
  }

  static add(n, prod) {
    let item = { content: prod, bought: false };
    if (!this.items[n]) this.items[n] = [item];
    else this.items[n].push(item);
    return item;
  }

  static update(n, i, newProd) {
    this.items[n][i].content = newProd;
    return this.items[n][i];
  }

  static bought(n, i) {
    this.items[n][i].bought = true;
  }

  static remove(n, i) {
    this.items[n].splice(i, 1);
  }

  static reset() {
    this.items = {};
  }
}

module.exports = ShoppingList;
