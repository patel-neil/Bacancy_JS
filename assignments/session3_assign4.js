let ages = prompt("Enter ages separated by commas:").split(",")

new_ages = ages.filter( age => age > 0)

console.log(new_ages);