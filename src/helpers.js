function choice(items) {
    let randomFruits = Math.floor(Math.random() * items.length);
    return items[randomFruits];
  }
  function remove(fruit, fruits) {
    const index = fruits.indexOf(fruit);
    if (index !== -1) {
      return [...fruits.slice(0, index), ...fruits.slice(index + 1)];
    }
    return fruits;
  }

  export {choice, remove}