// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom"; // unused currently
// import "./searchBar.scss";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const handleChange = (event) => {
//     console.log("Query1: ", query);
//     console.log("Target value: ", event.target.value);
//     setQuery(event.target.value);
//   }
//   console.log("Query2: ", query);

//   return (
//       <form className="search-bar-form">
//         <input type="search" placeholder="Search by product title..." name="search" value={query} onChange={handleChange} className="search-bar" />
//         <button type="submit" className="search-button cta-button">Search</button>
//       </form>
//   );
// }

// export default SearchBar;