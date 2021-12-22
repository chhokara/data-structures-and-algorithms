class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        let node = new Node(value, priority)
        this.values.push(node)
        percolateUp()
    }

    dequeue() {
        if(!this.values.length) {
            return
        }
        let tempRoot = this.values[0]
        this.values[0] = this.values[this.values.length - 1]    
        this.values[this.values.length - 1] = tempRoot

        let retVal = this.values.pop()

        this.percolateDown()
        
        return retVal
    }

    percolateUp() {
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        
        while(this.values[index].priority < this.values[parentIndex].priority && index > 0) {
            let temp = this.values[index]
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = temp

            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    percolateDown() {
        let parentIndex = 0
        let leftChildIndex = 2 * parentIndex + 1
        let rightChildIndex = 2 * parentIndex + 2

        while(this.values[leftChildIndex].priority < this.values[parentIndex].priority || 
              this.values[rightChildIndex].priority < this.values[parentIndex].priority) {
                if(this.values[leftChildIndex].priority < this.values[parentIndex].priority &&
                   this.values[rightChildIndex].priority < this.values[parentIndex].priority) {
                    let childToSwap = Math.min(this.values[leftChildIndex].priority, this.values[rightChildIndex].priority)
                    let childIndex = this.values.indexOf(childToSwap)

                    let tempChild = this.values[childIndex]
                    this.values[childIndex] = this.values[parentIndex]
                    this.values[parentIndex] = tempChild

                    parentIndex = childIndex
                } else if(this.values[rightChildIndex].priority < this.values[parentIndex].priority) {
                    let tempRightChild = this.values[rightChildIndex]
                    this.values[rightChildIndex] = this.values[parentIndex]
                    this.values[parentIndex] = tempRightChild

                    parentIndex = rightChildIndex
                } else if(this.values[leftChildIndex].priority < this.values[parentIndex].priority) {
                    let tempLeftChild = this.values[leftChildIndex]
                    this.values[leftChildIndex] = this.values[parentIndex]
                    this.values[parentIndex] = tempLeftChild

                    parentIndex = leftChildIndex
                }

                leftChildIndex = 2 * parentIndex + 1
                rightChildIndex = 2 * parentIndex + 2
        }
    }
}