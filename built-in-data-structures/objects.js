// Objects are great to use when order does not matter
// They are also great for fast access/ insertion and removal

// Big-O of objects:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(1)

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// O(N)
console.log(Object.keys(instructor));

// O(N)
console.log(Object.values(instructor));

// O(N)
console.log(Object.entries(instructor));

// O(1)
console.log(instructor.hasOwnProperty("firstName"));
