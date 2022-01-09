// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

// promise
//   .then((data) => {
//     data.split('');
//   })
//   .catch((err) => {
//     err.console.warn('Warning');
//   });

function merge<T extends object, U extends string | number>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Michael' }, 30);
console.log(mergeObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'Michael' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Malice');
textStorage.addItem('Michael');
textStorage.removeItem('Malice');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// objectStorage.addItem({ name: 'Manu' });
// objectStorage.addItem(maxObj);
// objectStorage.removeItem(maxObj);
