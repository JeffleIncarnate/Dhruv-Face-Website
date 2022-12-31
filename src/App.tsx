import { Routes, Route } from "react-router-dom";

import LoginPage from "./layouts/Login";

import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="register" element={<h1>He</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
    </>
  );
}
