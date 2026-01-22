// 1. Predict the output and explain the memory state.

const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // ?
console.log(registry.active[0].name); // ?
console.log(registry.version);       // ?

/*

Output: 
2
Gamma
undenfined

*/


/* The code above, does shallow copy. As the fields inside the 'registry' are arrays(i.e reference types), it does not
    create a new copy into the 'copy' array. it creates a reference to the original array. So any modification done 
    by the 'copy' array will result in changing the 'registry' array.

    And version is not defined in the original 'registry' array, so it will be undefined.
*/