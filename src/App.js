import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Character/>} />
        <Route exact path="/characters" element={<Character />} />
        <Route exact path="/characters/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
