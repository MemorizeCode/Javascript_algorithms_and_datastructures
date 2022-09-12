let nums =  [3,6,9,1,4,2,0,8,9,7]

function linear(nums,n){
    for(let i=0;i<nums.length;i++){
        if(nums[i] == n){
            return i
        }
    }
    return false
}

console.log(linear(nums,4))