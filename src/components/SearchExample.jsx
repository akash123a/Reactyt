import React, { useState } from "react";

function SearchExample() {
  const [search, setSearch] = useState("");

  const fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchExample;
