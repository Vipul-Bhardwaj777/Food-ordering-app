const Search = () => (
  <div className="search flex">
    <div className="search-1">
      <h1>Tomato</h1>
      <p>Discover the best food & drinks</p>
    </div>

    <div className="search-2 flex">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
      <button className="search-btn">
        <i className="fa-sharp fa-solid fa-2x fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
);

export default Search;
