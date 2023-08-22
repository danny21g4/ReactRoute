import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

export default function App() {
  const nav = (
    <>
      <div className="flex w-full capitalize h-6 py-7 mb-4 align-middle items-center">
        <span className="w-2/4 text-2xl">#VANLIFE</span>
        <nav className="w-full flex flex-row justify-evenly">
          <Link to="/">home</Link> <br />
          <Link to="/about">about</Link> <br />
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    </>
  );

  const returnData = (
    <>
    <main className="w-2/4 mx-auto bg-slate-200 text-black">
      {nav}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </main>
    </>
  );

  return returnData;
}
