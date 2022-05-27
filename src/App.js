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
import DetailPage from "./pages/DetailPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { SignUpPage } from "./pages/SignUpPage";
import React, { useState } from "react";
import { ListOfCasualClothes } from "./Components/Tekstiler/ListOfCasualClothes";

import { UpdatePage } from "./pages/UpdatePage";
import { FindOsPage } from "./pages/FindOsPage";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const auth = getAuth();

  useState(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
      } else {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
      }
    });
  }, [auth.currentUser]);

  return (
    <main>
      <Banner />
      <Nav />
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/omos" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/detailpage/:id" element={<DetailPage />}></Route>
        <Route path="/listofcasclothes" element={<FilteredCasual />} />
        <Route path="/findos" element={<FindOsPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="*" element={<Navigate to="/homepage" />}></Route>

        {isAuth && (
          <>
            <Route path="/" element={<ListOfCasualClothes showLoader={setShowLoader} />} />
            <Route path="/create" element={<Create showLoader={setShowLoader} />} />
            <Route path="/update" element={<UpdatePage showLoader={setShowLoader} />} />
          </>
        )}
      </Routes>

      {showLoader}
    </main>
  );
}

export default App;
