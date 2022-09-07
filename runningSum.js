/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let results = [];
      nums.reduce((acc,num) => {
          results.push(acc += num);
          return acc
      },0)
      console.log(results)
      return results
  };

runningSum([1,2,3,4])