// ============ STEP 2: CONCRETE EXAMPLES =================

// Start with simple examples
// Progress to more complex examples
// Explore examples with empty inputs
// Explore examples with invalid inputs

// Write a function charCount() that takes in a string and returns counts for each character in the string

// should we include characters that are not in the string?
charCount("aaaa"); // {a: 4, b: 0, c: 0}
// should we only include characters that are in the string?
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

// should we include numbers as well?
charCount("my phone number is 541654651654");
// should we have separate counts for lowercase and uppercase?
charCount("Hello hi");

// how should we handle an empty string or a value of null, object, number, etc.
charCount("");
