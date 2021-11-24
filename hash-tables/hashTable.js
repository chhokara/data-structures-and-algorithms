class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    // set
    // 1. Accepts a key and a value
    // 2. Hashes the key 
    // 3. Stores the key-value pair in the hash table array via separate chaining
    set(key, value) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    // get
    // 1. Accepts a key
    // 2. Hashes the key
    // 3. Retrieves the key-value pair in the hash table 
    // 4. If the key isn't found, returns undefined
    get(key) {
        let index = this._hash(key)
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    values() {
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    keys() {
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
}

let ht = new HashTable()

ht.set("arsh", "chhokar")
ht.set("arsh", "chhokar")
ht.set("adarsh", "chhokar")
ht.set("harman", "garcha")
ht.set("simran", "garcha")

ht.keys().forEach((key) => {
    console.log(ht.get(key))
})
