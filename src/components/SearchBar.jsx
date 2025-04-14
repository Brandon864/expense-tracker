function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search expenses..."
        className="search-bar"
      />
    );
  }
  
  export default SearchBar;