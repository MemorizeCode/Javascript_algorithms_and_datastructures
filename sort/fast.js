let nums =  [5,3,6,4,7,2,8,1,10,9,3,55,23,78,43,23,15,20]

function fast(nums){
    if(nums.length <= 1){
        return nums
    }
    let middle = Math.floor(nums.length/2)
    let opora = nums[middle]
    let min = []
    let max = []
    for(let i =0;i<nums.length;i++){
        if(i === middle){
            continue
        }
        if(nums[i]<opora){
            min.push(nums[i])
        }else{
            max.push(nums[i])
        }
    }
    return [...fast(min), opora, ...fast(max)]
}
console.log(fast(nums))