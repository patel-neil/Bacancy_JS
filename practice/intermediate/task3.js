// Objective
// Fetch data from an API and transform it using modern JavaScript array methods.
// Input
// Assume the API returns the following data:
// [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Neha", active: false }
// ]
// Requirements
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users
// Transform data into the format:
// { userId: 1, userName: "Amit" }

// Expected Output
// [
//   { userId: 1, userName: "Amit" }
// ]

//Logic for the function
const data = [
    {id: 1, name: "Amit", active: true },
    {id: 2, name: "Neha", active: false },
    {id: 3, name: "Rahul", active: true },
    {id: 4, name: "Priya", active: false },
]

function fetchData(data) {
    data.filter(user => user.active === true).map(user => { return { userId: user.id, userName: user.name } }) .forEach(user => console.log(user));
}

fetchData(data);

//Code with the actual fetch() implementation

async function fetchData(uri) {
    try
    {
        const myPromise = await fetch(uri);

        const data = await myPromise.json();

        data.filter(user => user.active === true)
            .map(user => ({userId : user.id, userName : user.name}))
            .forEach(user => console.log(user));
    }
    catch(error)
    {
        console.error("Error fetching data: ", error);
    }
}

fetchData("http://test.com/users");