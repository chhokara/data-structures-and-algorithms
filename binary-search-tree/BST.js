class Node {
    constructor() {
        this.value = value
        this.left = null
        this.right = null
    }
    
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let node = new Node(val)
        if(!this.root) {
            this.root = node
            return this
        } 
        let current = this.root
        while(true) {
            if(node.value === current.value) return undefined
            if(node.value > current.value) {
                if(current.right == null) {
                    current.right = node
                    return this
                } 
                current = current.right
            } else {
                if(current.left == null) {
                    current.left = node
                    return this
                } 
                current = current.left
            }
        }
    }

    find(val) {
        if(!this.root) {
            return undefined
        }
        let current = this.root
        let found = false
        while(current && !found) {
            if(val > current.value) {
                current = current.right
            } else if(val < current.value) {
                current = current.left
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return current
    }
}