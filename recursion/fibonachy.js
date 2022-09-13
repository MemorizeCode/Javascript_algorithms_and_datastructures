function fibonach(n){
    return n == 1 || n == 2 ? 1 : fibonach(n-1) + fibonach(n-2)
}
console.log(fibonach(8))