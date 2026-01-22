// 4. Write a function called masterClone(obj) that performs a deep copy 
// without using JSON.stringify or structuredClone.


const data = 
{
    name: "Amit",
    address: {
        street: "Times Corporate Park",
        city: {
            area: "Thaltej",
            district: "Ahmedabad"
        }
    },
    hobbies: ['singing', 'teaching', ['coding', 'debugging']],

    greet : function() {
        console.log("Hi!")
    }
}


function masterclone(obj)
{
    if( obj === null || typeof obj !== 'object')
    {
        return obj;
    }

    const new_data = Array.isArray(obj) ? [] : {};

    for(let item in obj)
    {
        if(obj.hasOwnProperty(item))
        {
            new_data[item] = masterclone(obj[item]);
        }
    }
    return new_data
}

console.log(masterclone(data))

console.log(data)