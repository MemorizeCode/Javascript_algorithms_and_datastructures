//Бинарный посик
let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function binary(nums,n){
    let start = 0;
    let end = nums.length
    let middle = 0
    while(start<=end){
        middle =  Math.floor((start+end)/2)
        if(nums[middle] == n){
            return middle
        }
        if(nums[middle] > n){
            end = middle - 1
        }
        else{
            start = middle + 1
        }  
    }
    return middle
}

console.log(binary(nums,10))
