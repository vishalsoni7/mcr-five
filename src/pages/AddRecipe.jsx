import { useState } from "react";
import { useContext } from "react";
import { RecipesContext } from "../component/RecipesContext";

export const AddRecipe = ({ recipeId }) => {
  const { data, setData, setShowModal, setEditId } = useContext(RecipesContext);

  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "ingredients" || name === "instructions") {
      setInput((prevInput) => ({ ...prevInput, [name]: value.split("\n") }));
    } else {
      setInput((prevInput) => ({
        id: `${Date.now()}`,
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const addToData = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
    setInput({});
    setShowModal(false);
  };

  const addImg = (e) => {
    const files = e.target.files[0];
    setInput((prevInput) => ({
      ...prevInput,
      img: URL.createObjectURL(files),
    }));
  };

  const editRecipe = () => {
    const editRecipe = data.find(({ id }) => id === recipeId);

    const updateRecipe = {
      id: editRecipe.id,
      name: input.name || editRecipe.name,
      cuisine: input.cuisine || editRecipe.cuisine,
      ingredients: input.ingredients || editRecipe.ingredients,
      instructions: input.instructions || editRecipe.instructions,
      img: input.img || editRecipe.img,
    };

    const updateRecipes = data.map((item) =>
      item.id === editRecipe.id ? updateRecipe : data
    );
    setData(updateRecipes);
    setShowModal(false);
    setEditId(null);
  };

  const findRecipe = data.find((item) => item.id === recipeId);

  return (
    <div className="add-div">
      <h2> Add Recipe </h2>
      <div className="add">
        {" "}
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleInput}
          defaultValue={recipeId ? findRecipe.name : ""}
        />
        <input
          placeholder=" Cuisine"
          type="text"
          name="cuisine"
          onChange={handleInput}
          defaultValue={recipeId ? findRecipe.cuisine : ""}
        />
        <textarea
          placeholder="Ingredients"
          type="text"
          name="ingredients"
          onChange={handleInput}
          defaultValue={recipeId ? findRecipe.ingredients : ""}
        />
        <textarea
          placeholder=" Instructions"
          type="text"
          name="instructions"
          onChange={handleInput}
          defaultValue={recipeId ? findRecipe.instructions : ""}
        />
        <input
          type="file"
          id="file"
          name="img"
          onChange={addImg}
          accept="image/*"
        />{" "}
        <label htmlFor="file"> Upload Photo </label>
      </div>
      <button
        onClick={() => {
          recipeId ? editRecipe() : addToData(input);
        }}
      >
        {" "}
        {recipeId ? "Update" : "Add"}
      </button>
    </div>
  );
};
