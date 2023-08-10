import { useContext } from "react";
import { RecipesContext } from "../component/RecipesContext";
import { AddRecipe } from "./AddRecipe";

import { FaTrashAlt, FaPen, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const { data, setData, showModal, setShowModal, editId, setEditId } =
    useContext(RecipesContext);

  const delteRecipe = (id) => {
    const updateRecipe = data.filter((item) => item.id !== id);
    setData(updateRecipe);
  };

  return (
    <div className="home">
      <h2> Add Recipes </h2>

      <div className="card-inner">
        {data?.map(({ id, img, cuisine, name }) => (
          <div key={id} className="card">
            <div className="img-div">
              {" "}
              <img src={img} />
              <div className="icon">
                <FaTrashAlt onClick={() => delteRecipe(id)} />
                <FaPen
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
                <h5> Cuisine type : {cuisine} </h5>
                <h5> Ingredients </h5>
                <h5> Instructions </h5>
              </div>{" "}
            </NavLink>
          </div>
        ))}
        <FaPlus onClick={() => setShowModal(true)} />
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
