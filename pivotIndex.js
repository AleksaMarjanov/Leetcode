/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    // map/loop over the array
    // check when looping over num in array to see if
    // left side of indexed number looped over is equal to the right side added together
    if ( nums.length === 0 ) return -1;
    if ( nums.length === 1 ) return 0;

    return nums.findIndex = (num, idx, arr) => {
        const leftNums = arr.map((el, i) => el !== idx ? el : 0);
        const leftSum = leftNums.reduce((acc, curr) => acc + curr, 0);
        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
        return ( leftSum === leftNums - totalSum - arr[idx])
        
    }
    
}

// test case 
pivotIndex([1,7,3,6,5,6])