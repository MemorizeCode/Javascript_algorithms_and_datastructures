class Stack {
    constructor() {
      this.stack = [];
    }
    push(item) {
      this.stack.push(item);
    }
    pop() {
      this.stack.pop();
    }
}

let list = new Stack()

//Добавили 
list.push('1')
list.push('2')
list.push('3')

//Удалям
list.pop()
list.pop()


console.log(list)