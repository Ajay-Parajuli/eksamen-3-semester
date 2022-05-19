import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { Clothing } from "./pages/ClothingFilter";
import { Nav } from "./Components/Nav";
import { Banner } from "./Components/Banner";
import { FilteredCasual } from "./pages/FilteredCasual";
import { Create } from "./pages/Create";
import { CartPage } from "./pages/CartPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/detailpage/:id" element={<DetailPage />}></Route>
        <Route path="/listofcasclothes" element={<FilteredCasual />} />
        <Route path="*" element={<Navigate to="/homepage" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
