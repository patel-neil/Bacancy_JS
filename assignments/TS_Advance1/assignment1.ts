// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

function wrapInArray<T>(value : T) : T[]
{

	return [value];
}

wrapInArray({name: "Alice", age: 30});

console.log(wrapInArray(5)); // Output: [5]
console.log(wrapInArray("Hello"));


interface PaginatedResponse<T>
{
    items : T[];
    total : number;
}