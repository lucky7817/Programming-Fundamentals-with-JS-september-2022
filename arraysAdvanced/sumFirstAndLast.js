function sumFirstAndLast(nums) {

    let firstIndex = Number(nums[0]);
    let lastIndex = Number(nums[nums.length - 1]);
    let sum = firstIndex + lastIndex;
    console.log(sum);

}

sumFirstAndLast(['20', '30', '40']);