import { useContext } from "react";
import { RecipesContext } from "../component/RecipesContext";
import { AddRecipe } from "./AddRecipe";

import { FaTrashAlt, FaPen, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Search } from "./Search";

export const Home = () => {
  const { data, setData, showModal, setShowModal, editId, setEditId } =
    useContext(RecipesContext);

  const [radioValue, setRadioValue] = useState("");
  const [searchedValue, setSearchedValue] = useState("");

  const delteRecipe = (id) => {
    const updateRecipe = data.filter((item) => item.id !== id);
    setData(updateRecipe);
  };

  let updatedData = data;

  if (searchedValue.trim() !== "") {
    switch (radioValue) {
      case "name":
        updatedData = data.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchedValue.toLowerCase())
        );
        break;
      case "ingredients":
        updatedData = data.filter((recipe) =>
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchedValue.toLowerCase())
          )
        );
        break;
      case "cuisine":
        updatedData = data.filter((recipe) =>
          recipe.cuisine.toLowerCase().includes(searchedValue.toLowerCase())
        );
        break;
      default:
        break;
    }
  } else {
    updatedData = data;
  }

  return (
    <div className="home">
      <Search
        prop={{ setRadioValue, setSearchedValue, radioValue, searchedValue }}
      />
      <h2> Add Recipes </h2>

      <div className="card-inner">
        {updatedData?.map(({ id, img, cuisine, name }) => (
          <div key={id} className="card">
            <div className="img-div">
              {" "}
              <img src={img} />
              <div className="icon">
                <FaTrashAlt
                  className="icon-color"
                  onClick={() => delteRecipe(id)}
                />
                <FaPen
                  className="icon-color-a"
                  onClick={() => {
                    setEditId(id);
                    setShowModal(true);
                  }}
                />
              </div>
            </div>
            <NavLink className="link" to={`/recipes/${id}`}>
              <div className="card-child">
                <h4> {name} </h4>

                <div className="title-div">
                  <h5> Cuisine type: </h5> <h5> {cuisine}</h5>
                </div>
                <div className="title-div">
                  {" "}
                  <h5> Ingredients: </h5> <h5> See More</h5>
                </div>
                <div className="title-div">
                  {" "}
                  <h5> Instructions:</h5> <h5> See More</h5>
                </div>
              </div>{" "}
            </NavLink>
          </div>
        ))}
        <FaPlus className="icon-color-a" onClick={() => setShowModal(true)} />
      </div>
      {showModal && (
        <div
          onClick={() => {
            setEditId(null);
            setShowModal(false);
          }}
          className="modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal_outer_container"
          >
            <AddRecipe recipeId={editId} />
          </div>
        </div>
      )}
    </div>
  );
};
