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
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "./firebase-config";
import { SignUpPage } from "./pages/SignUpPage";
import React, { useState } from "react";
import { ListOfCasualClothes } from "./Components/Tekstiler/ListOfCasualClothes";
import { useNavigate } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  useState(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        userIsValid(user);
      } else {
        setIsValid(false);
        setIsAuth(false);
        localStorage.removeItem("isAuth");
      }
    });

    async function userIsValid(user) {
      console.log(user);
      const docRef = doc(usersRef, user.uid);
      const docSnap = await getDoc(docRef);
      setIsValid(false);

      if (docSnap.data()) {
        const userData = docSnap.data();

        console.log(userData);

        if (userData.name && userData.birthday) {
          setIsValid(true);
        }
        console.log(isValid);
      }
    }
  }, [auth.currentUser]);

  function handleClick() {
    navigate(`/`);
  }

  return (
    <main>
      <div
        style={{
          padding: "1em 1em 0",
        }}
      >
        <h3
          onClick={handleClick}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#007aff",
            cursor: "pointer",
          }}
        ></h3>
      </div>

      <Nav />
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/detailpage/:id" element={<DetailPage />}></Route>
        <Route path="/listofcasclothes" element={<FilteredCasual />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/homepage" />}></Route>

        {isValid && (
          <>
            <Route path="/" element={<ListOfCasualClothes showLoader={setShowLoader} />} />
            <Route path="/create" element={<Create showLoader={setShowLoader} />} />
          </>
        )}
      </Routes>
      {showLoader}
    </main>
  );
}

export default App;
