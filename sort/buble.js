let nums = [5,3,6,4,7,2,8,1,10,9,3]

function buble(nums){
    for(let i =0;i<nums.length;i++){

        for(let j =i+1;j<nums.length;j++){
            if(nums[j]<nums[i]){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}
console.log(buble(nums))