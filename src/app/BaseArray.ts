export {};
declare global {
  interface Array<T> {
    percentage();
    joinArray(secondArray, on);
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
Array.prototype.joinArray = function (secondArray, on) {

  for (let i = 0; i < this.length; i++) {
   const found = secondArray.filter((element) => this[i][on] === element[on]);
    const task = { tasks: Object.values(found) };
    this[i]= { ...this[i], ...task };
  }
  return this;
};
