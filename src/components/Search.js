import React from "react";

function Search({setSearch}) {

  return (
    <div className="filter">

      <input id="search-bar" onChange={(e) => { 
        setSearch(e.target.value)
      }}
       type="text" 
       placeholder="Search Notes" />
       
    </div>
  );
}

export default Search;
