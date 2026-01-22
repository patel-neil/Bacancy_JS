//Exercise 8
//Scenario: You need to update a user's theme setting without mutating the original object.

let Settings = {
    theme: "light",
    notification : true
}

let newSettings = 
{
    ...Settings,
    theme: "dark"
}

console.log(newSettings);

console.log(Settings);