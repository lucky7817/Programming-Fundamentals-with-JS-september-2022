function firstAndLastKNumbers(nums) {

    let count = nums.shift();

    let firstNumbers = nums.slice(0, count);
    let lastNumbers = nums.slice(nums.length - count);

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);