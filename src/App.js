import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Pagination from "./components/pagination";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Pagination />} />
          <Route exact path="/characters" element={<Pagination />} />
          <Route exact path="/characters/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
