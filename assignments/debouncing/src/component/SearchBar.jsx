import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../useDebounce";

function Search() {

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) return;

    console.log("Value Debounce API call:", debouncedQuery);
  }, [debouncedQuery]);

  const [functionQuery, setFunctionQuery] = useState("");
  const timerRef = useRef(null);

  function handleFunctionDebounce(value) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log("Function Debounce API call:", value);
    }, 500);
  }

  function handleChange(e) {
    const value = e.target.value;
    setFunctionQuery(value);
    handleFunctionDebounce(value);
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      
      <h2>Debounce using VALUE</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search using value debounce..."
      />

      <p>Immediate Value: {query}</p>
      <p>Debounced Value: {debouncedQuery}</p>


      <hr style={{ margin: "30px 0" }} />


      <h2>Debounce using FUNCTION</h2>

      <input
        value={functionQuery}
        onChange={handleChange}
        placeholder="Search using function debounce..."
      />

      <p>Typed Value: {functionQuery}</p>

    </div>
  );
}

export default Search;