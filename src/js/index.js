import * as mathFunctions from './math.js';
import throttle from 'lodash.throttle';

console.log(mathFunctions);

const {
  sum: sumFn,
  division: divisionFn,
  multiply: multiplyFn,
  default: subFn,
} = mathFunctions;

console.log(divisionFn(10, 20));

console.log(throttle);
