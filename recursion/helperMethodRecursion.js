// Helper method recursion is a pattern in which there is an outer non-recursive
// function calling an inner recursive function. 
function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        return helper(helperInput.slice(1))
    }

    helper(arr)
    return result
}

