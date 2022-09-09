/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // if number is even divide it by 2 otherwise subract it from 1
  // take the current number and check it again
  let numberOfSteps = 0;

  // check if number is odd or even
  while(num > 0) {
    // Before bitmask I used num % 2 to check if it even 
          if ((num & 1) === 0) {
              num >>= 1;  // Before I used num /= 2 to half the number
            } else {
              num--; 
            }
            numberOfSteps++;
  }
  //return number of steps to zero
  console.log(numberOfSteps);
  return numberOfSteps;
};

numberOfSteps(14);
