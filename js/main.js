/*
 * Функції з побічними ефектами та чисті функції
 */
//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = () => {
//   for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] *= 2;
//   }
// };

// doubleMulti();

// console.log(numbers);

//? Clear function
const numbers = [123, 56, 78, 9, 3];

const doubleMulti = numbersArr => {
  const newNumbers = [...numbersArr];

  for (let i = 0; i < newNumbers.length; i += 1) {
    newNumbers[i] *= 2;
  }

  return newNumbers;
};

const numbersCopy = doubleMulti(numbers);

console.log(numbers);
console.log(numbersCopy);
