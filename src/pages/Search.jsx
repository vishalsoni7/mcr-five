import { useContext, useState } from "react";
import { RecipesContext } from "../component/RecipesContext";
import { recipes } from "../data";

export const Search = () => {
  const { data, setData } = useContext(RecipesContext);

  const handleInput = (e) => {
    const input = e.target.value.toLowerCase();
    const searchRecipes = data.filter((item) => {
      const ingredients = item.ingredients.map((i) => i.toLowerCase());
      return (
        item.name.trim().toLowerCase().includes(input) ||
        item.cuisine.trim().toLowerCase().includes(input) ||
        ingredients.includes(input)
      );
    });
    input === "" ? setData(recipes) : setData(searchRecipes);
  };

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search Item you want"
        onChange={handleInput}
      />
      <h4> Filters: </h4>
      <input name="filter" type="radio" value="name" /> Name
      <input name="filter" type="radio" value="ingredients" /> Ingredients
      <input name="filter" type="radio" value="cuisine" /> Cuisine
    </div>
  );
};
