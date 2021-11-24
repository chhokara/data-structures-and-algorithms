var groupAnagrams = function(strs) {
    const groups = {}
    
    strs.forEach(str => {
        let sortedStr = str.split('').sort().join('')
        if(groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
};