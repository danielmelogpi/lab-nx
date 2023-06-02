import { countArray } from '@package-based/array-lib';

setInterval(() => {
  console.log('AAA');
  const array = new Array(5).fill(0);
  countArray(array);
}, 1000);
