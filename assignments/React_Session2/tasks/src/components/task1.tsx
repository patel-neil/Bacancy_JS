// 1. **useState**
    
//Add a new component that has two pieces of state: 
// `name` (string) and `age` (number). Render them and add 
// buttons to increment age and update name from an input.

import React, { useState } from "react";

function UserProfile() {
  const [age, setAge] = useState(22);
  const [name, setName] = useState("Neil");

  const handleAgeChange = () => {
    setAge(age + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="task1">
        <h1>User Profile</h1>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Age: <strong>{age}</strong>
        </p>

        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={handleNameChange}
        />

        <button onClick={handleAgeChange}>Increment Age</button>
      </div>
    </>
  );
}

export default UserProfile;
