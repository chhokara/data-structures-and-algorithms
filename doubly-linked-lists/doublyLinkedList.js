class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if(this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) {
            return undefined
        }
        let oldTail = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.previous
            this.tail.next = null
            oldTail.previous = null
        }
        this.length--
        return oldTail
    }

    shift() {
        if(this.length == 0) {
            return undefined
        }
        let oldHead = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.previous = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null
        }
        let node, count 
        if(index <= this.length/2) {
            node = this.head
            count = 0
            while(count != index) {
                node = node.next
                count++
            }
        } else {
            node = this.tail
            count = this.length-1
            while(count != index) {
                node = node.previous
                count--
            }
            
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
        if(index < 0 || index > this.length) {
            return false
        }
        if(index == 0) {
            return !!this.unshift(val)
        }
        if(index == this.length) {
            return !!this.push(val)
        }
        let previousNode = this.get(index - 1)
        let nextNode = previousNode.next
        let newNode = new Node(val)
        previousNode.next = newNode
        newNode.previous = previousNode
        newNode.next = nextNode
        nextNode.previous = newNode
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
        let nodeToRemove = this.get(index)
        let previousNode = nodeToRemove.previous
        let nextNode = nodeToRemove.next
        nodeToRemove.next = null
        nodeToRemove.previous = null
        previousNode.next = nextNode
        nextNode.previous = previousNode
        this.length--
        return nodeToRemove
    }
}

let dll = new DoublyLinkedList()
dll.push("hello")
dll.push("hi")
dll.push("hey")
console.log("NEW LIST: ", dll)
dll.remove(1)
console.log("REMOVE: ", dll)
