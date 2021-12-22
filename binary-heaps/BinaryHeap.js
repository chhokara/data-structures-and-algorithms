class BinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        percolateUp()
    }

    extractMax() {
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
        
        while(this.values[index] > this.values[parentIndex] && index > 0) {
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

        while(this.values[leftChildIndex] > this.values[parentIndex] || 
              this.values[rightChildIndex] > this.values[parentIndex]) {
                if(this.values[leftChildIndex] > this.values[parentIndex] &&
                   this.values[rightChildIndex] > this.values[parentIndex]) {
                    let childToSwap = Math.max(this.values[leftChildIndex], this.values[rightChildIndex])
                    let childIndex = this.values.indexOf(childToSwap)
                    let tempChild = this.values[childIndex]
                    this.values[childIndex] = this.values[parentIndex]
                    this.values[parentIndex] = tempChild
                    parentIndex = childIndex
                } else if(this.values[rightChildIndex] > this.values[parentIndex]) {
                    let tempRightChild = this.values[rightChildIndex]
                    this.values[rightChildIndex] = this.values[parentIndex]
                    this.values[parentIndex] = tempRightChild
                    parentIndex = rightChildIndex
                } else if(this.values[leftChildIndex] > this.values[parentIndex]) {
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

let bh = new BinaryHeap()
bh.insert(55)
bh.insert(12)
bh.insert(27)
bh.insert(18)
bh.insert(33)
bh.insert(39)
bh.insert(41)
bh.insert(67)
bh.insert(1)
bh.insert(99)

console.log(bh.extractMax())
console.log(bh.extractMax())

console.log(bh.values)