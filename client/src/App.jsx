import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import HousesList from "./components/HousesList";
import Details from "./components/Details";
import About from "./components/About";
import UpdateHouse from "./components/UpdateHouse";

function App() {
  const logedIn = localStorage.getItem("isLogedIn");
  const [stateLoged, setStateLoged] = useState(localStorage.getItem("isLogedIn"));
  useEffect(() => {
    console.log("testtt");
  }, [stateLoged]);
  
  return (
    <>
      <BrowserRouter>
        <Navbar setStateLoged={setStateLoged} stateLoged={stateLoged} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/list" element={<HousesList />} />
          <Route exact path="/details/:id" element={<Details setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
          <Route exact path="/about" element={<About />} />

          {logedIn ? (
            <>
              <Route exact path="/create" element={<CreatePost setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/register" element={<Profile setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/login" element={<Profile setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/profile" element={<Profile setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/details/:id/edit" element={<UpdateHouse setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
            </>
          ) : (
            <>
              <Route exact path="/create" element={<Register setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/register" element={<Register setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/login" element={<LogIn setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/profile" element={<Register setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
              <Route exact path="/details/:id/edit" element={<Register setStateLoged={setStateLoged} stateLoged={stateLoged} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
