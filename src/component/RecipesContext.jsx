import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { recipes } from "../data";

// const dataFromLocalStorage = (key) => {
//   let data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : [];
// };

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [data, setData] = useState(recipes);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const values = { data, setData, showModal, setShowModal, editId, setEditId };

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(recipes));
  // }, [data]);

  return (
    <>
      {" "}
      <RecipesContext.Provider value={values}>
        {children}
      </RecipesContext.Provider>{" "}
    </>
  );
};
