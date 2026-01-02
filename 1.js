// 1.Write a function mergeArrays that accepts any number of arrays as arguments and 
// merges them into a single array. Use the spread operator to accomplish this. 
// Example Input: mergeArrays ([1, 2], [3, 4], [5, 6]) 
// Example Output: [1, 2, 3, 4, 5, 6]

function mergeArrays(...arrays) {
    let ans = [].concat(...arrays);
    return ans;
}
console.log(mergeArrays([1,2],[3,4],[4,5]))

// 2. Create a function calculateTotal that takes an arbitrary number of numeric values 
// (using the rest operator) and returns their sum. 
// Example Input: calculateTotal (10, 20, 30, 40) 
// Example Output: 100 

function calculateTotal(...a){
    console.log(a);
    let s = a.reduce((a,b)=> a+b,0);
    return s;
}
console.log(calculateTotal(1,2,3,4,5,-5))

// 3. Write a function updateEmployeeDetails that takes an object representing an 
// employee’s details and updates their role while maintaining the other properties using 
// the spread operator. 
// Example Input: const employee = {name: ‘John, role: ‘Developer’, age: 28, location: 
// ‘IN’} 
// updateEmployeeDetails (employee, ‘Senior Developer’) 
// Example Output: 
// {name: ‘John’, role: ‘Senior Developer’, age: 28, location: ‘IN’}

// function updateEmployeeDetails(employee, newRole) {
//   return {
//     ...employee,
//     role: newRole
//   };
// }

// const employee = { name: 'John', role: 'Developer', age: 28, location: 'IN' };
// console.log(updateEmployeeDetails(employee, 'Senior Developer'));
function updateEmployeeDetails(employee,newAge, newRole) {
  return {
    ...employee,
    age : newAge,
    role: newRole
  };
}

let employee = { name: 'John', role: 'Developer', age: 28, location: 'IN' };
employee = updateEmployeeDetails(employee,'Senior Developer', newAge =23)
console.log(employee);

// 4. You are given multiple objects representing user details and preferences. Write a 
// function mergeUserData that merges all the objects into one using the spread 
// operator. 
// Example Input: 
// const userDetails = {name: ‘CVR’, age: 25} 
// const userAddress = {address: ‘Mangalpally’, city: ‘Hyderabad’} 
// const userPreferences = {theme: ‘Engineering Edu’, language: ‘EN’} 
// Example Output: 
// {name: ‘CVR’, age: 25, address: ‘Mangalpally’, city: ‘Hyderabad’, theme: ‘Engineering 
// Edu’, language: ‘EN’}


function mergeUserData(userDetails,userAddress,userPreferences) {
    return {
        ...userDetails,
        ...userAddress,
        ...userPreferences
    }
}
const userDetails = {name: 'CVR', age: 25} 
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'} 
const userPreferences = {theme: 'Engineering Edu', language: 'EN'} 
let user = mergeUserData(userDetails,userAddress,userPreferences)
console.log(user)


// 5.Write a function updateProductInfo that extracts the id and name properties from a 
// product object and then adds new properties (discount and inStock) using the spread 
// operator. 
// Example Input: 
// const product = {id: 101, name: ‘Laptop’, price: 1000, category: ‘Electronics’} 
// Example Output: 
// {id: 101, name: ‘Laptop’, discount: 10, inStock: true}