export{};
declare global {
  interface Array<T> {
    percentage();
  }
}

Array.prototype.percentage = function () {
  for (let i = 0; i < this.length; i++) {
    let counter = 0;
    for (const input of this[i].tasks) {
      if (input.done.doneTask === true) counter += 1;
    }
    this[i].percentage = (counter / this[i].tasks.length) * 100;
  }

  // code to remove "o"
  return this;
};
