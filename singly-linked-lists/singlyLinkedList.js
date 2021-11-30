class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head= null
        this.tail = null
    }

    push(val) {
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) {
            return undefined
        }
        if(!this.head.next) {
            let node = this.head
            this.head = null
            this.tail = null
            this.length--
            return node
        }
        let current = this.head
        let previous = current
        while(current.next) {
            previous = current
            current = current.next
        }
        this.tail = previous
        this.tail.next = null
        this.length--
        return current
    }

    shift() {
        if(!this.head) {
            return undefined
        }
        let current = this.head
        this.head = current.next
        this.length--
        return current
    }

    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    get(index) {
        if(index > this.length - 1 || index < 0) {
            return null
        }
        let counter = 0
        let node = this.head
        while(counter < index) {
            node = node.next
            counter++
        }
        return node
    }

    set(val, index) {
        let node = this.get(index)
        if(node) {
            node.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false
        if(index == 0) {
            return !!this.unshift(val)
        }
        if(index == this.length) {
            return !!this.push(val)
        }
        let previous = this.get(index - 1)
        let newNode = new Node(val)
        previous.next = newNode
        newNode.next = previous.next
        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index == 0) {
            return this.shift()
        }
        if(index == this.length-1) {
            return this.pop()
        }
        let previous = this.get(index-1)
        let nodeToRemove = previous.next
        previous.next = nodeToRemove.next
        this.length--
        return nodeToRemove
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null 
        let next
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
        // [100,  201,  250,  350,  999]
        //                          PREV  NODE   
        // 999 --> 350 --> 250 --> 201 --> 100 --> null
    }

 }

let list = new SinglyLinkedList()
list.push("hello")
list.push("hi")
list.push("hey")

console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
list.unshift("Arsh")
console.log(list)

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")