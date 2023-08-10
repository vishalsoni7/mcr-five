import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { SingleRecipe } from "./pages/SingleRecipes";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
