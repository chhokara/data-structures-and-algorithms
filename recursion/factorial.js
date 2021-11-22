// Iterative
function factorial1(num) {
    let total = 1
    for(let i = num; i > 1; i--) {
        total *= i
    }
    return total
}

// Recursive
function factorial2(num) {
    if(num == 1) return 1
    return num * factorial2(num - 1)
}

    
        
            
                

