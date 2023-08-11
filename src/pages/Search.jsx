export const Search = ({
  prop: { setRadioValue, setSearchedValue, searchedValue },
}) => {
  const handleInput = (searchedValue) => {
    setSearchedValue(searchedValue);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
    handleInput(searchedValue);
  };

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search Item you want"
        value={searchedValue}
        onChange={(e) => handleInput(e.target.value)}
      />
      <h4> Filters: </h4>
      <input
        onChange={handleRadioChange}
        name="filter"
        type="radio"
        value="name"
      />{" "}
      Name
      <input
        onChange={handleRadioChange}
        name="filter"
        type="radio"
        value="ingredients"
      />{" "}
      Ingredients
      <input
        onChange={handleRadioChange}
        name="filter"
        type="radio"
        value="cuisine"
      />{" "}
      Cuisine
    </div>
  );
};
