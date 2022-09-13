const graph = {}

graph.a = ['b','c']
graph.b = ['f']
graph.c = ['d','e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function shirina(graph,start,end){
    let graph2 = []
    graph2.push(start)
    while(graph2.length > 0){
        let current = graph2.shift()
        if(!graph[current]){
            graph[current] = []
        }
        if(graph[current].includes(end)){
            return true
        }else{
            graph2 = [...graph2,... graph[current]]
        }
    }
    return false
}

console.log(shirina(graph,'a','g'))