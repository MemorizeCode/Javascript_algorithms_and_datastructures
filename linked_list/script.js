class LinkedListNode{
    constructor(value,next){
        this.value = value
        this.next = null
    }

    toString(){
        return `${this.value}`
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        let newNode = new LinkedListNode(value)
        if(!this.head || !this.tail){
            this.head = newNode
            this.tail = newNode

            return this
        }
        this.tail.next =  newNode
        this.tail = newNode
        return this
    }

    toArray(){
        let nodes = []
        let curnode = this.head
        while(curnode){
            nodes.push(curnode)
            curnode = curnode.next
        }
        return nodes
    }

    toString(){
        return this.toArray().map(node=> node.toString()).toString()
    }
}
let list = new LinkedList()
list.append('a').append('b').append('c').append('d')
console.log(list.toString())