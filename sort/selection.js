let nums = [5,3,6,4,7,2,8,1,10,9,3]

function selection(nums){
    for(let i =0;i<nums.length;i++){
        let min = i
        for(let j = i+1;j<nums.length;j++){
            if(nums[min]> nums[j]){
                min = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
    }
    return nums
}
console.log(selection(nums))