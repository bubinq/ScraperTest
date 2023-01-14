const SearchComponent = () => {
  return (
    <div className="search">
      <div className="heading">
        <h1>Search YouTube captions </h1>
        <h3>Example: Type "Billions and billions" in the input field</h3>
      </div>

      <form className="formWrapper">
        <div className="inputWrapper">
          <input type="text" placeholder="Search Text" />
        </div>
        <button className="searchBtn"> Search Captions </button>
      </form>
    </div>
  );
};

export default SearchComponent;
