import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RecipesContext } from "../component/RecipesContext";

export const SingleRecipe = () => {
  const { data } = useContext(RecipesContext);
  const { recipeId } = useParams();

  const findRecipe = data.find(({ id }) => id === recipeId);

  return (
    <div className="single">
      <h2>
        <NavLink className="link" to="/">
          {" "}
          {`⤺ ${findRecipe?.name}`}
        </NavLink>
      </h2>

      <div className="single-child">
        <div>
          <img src={findRecipe?.img} />{" "}
        </div>{" "}
        <div className="content">
          <h3>
            <b> {findRecipe?.cuisine} </b>{" "}
          </h3>{" "}
          <div>
            {" "}
            <b>Ingredients : </b>
            {findRecipe?.ingredients?.map((i) => (
              <span key={i}> {i}, </span>
            ))}{" "}
          </div>
          <div>
            {" "}
            <b>Instructions : </b>
            {findRecipe?.instructions?.map((i) => (
              <li key={i}> {i} </li>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
