import { Routes, Route } from "react-router-dom";

import Home from "./layouts/home";

import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<h1>He</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
    </>
  );
}
