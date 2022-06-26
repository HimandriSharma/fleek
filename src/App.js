import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Pagination from "./components/pagination";

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
      <Route exact path="/" element={<Character/>} />
        <Route exact path="/characters" element={<Character />} />
        <Route exact path="/characters/:id" element={<Detail />} />
      </Routes> */}
      <Provider store={store}>
        <Pagination />
      </Provider>
    </>
  );
}

export default App;
