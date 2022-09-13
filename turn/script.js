class Turn{
    constructor(){
        this.item = []
    }
    add(item){
        this.item.push(item)
    }
    delete(){
        this.item.shift()
    }
}

let list = new Turn()
list.add('1')
list.add('2')
list.add('3')

list.delete()

console.log(list)