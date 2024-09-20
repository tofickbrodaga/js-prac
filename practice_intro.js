// 1
export function average(arr) {
    let sum = 0
    for (let i=0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

// 2
class ImmutableList {
    constructor(items = []) {
      this._items = [...items];
    }
    add(item) {
      return new ImmutableList([...this._items, item]);
    }
    remove(index) {
      if (index < 0 || index >= this._items.length) {
        throw new Error("index out of range");
      }
      return new ImmutableList(this._items.filter((_, i) => i !== index));
    }
    update(index, newItem) {
      if (index < 0 || index >= this._items.length) {
        throw new Error("index out of range");
      }
      const updatedItems = this._items.map((item, i) => (i === index ? newItem : item));
      return new ImmutableList(updatedItems);
    }

    get items() {
      return [...this._items];
    }
  }
  
  const list = new ImmutableList([1, 2, 3]);
  const newList = list.add(4);
  const updatedList = newList.update(1, 20);
  const finalList = updatedList.remove(0);
  
  console.log(list.items);
  console.log(newList.items);
  console.log(updatedList.items);
  console.log(finalList.items);
  