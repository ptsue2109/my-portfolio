import { useState } from "react";
import logo from "./logo.svg";
import "./index.scss";
// import LazyLoad from "react-lazyload";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LazyLoad from "react-lazyload";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
