import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./container/Header";
import Nav from "./container/Nav";
import Day1 from "./pages/Day1";

function App() {
  const navs = [
    {
      id: 1,
      title: "Day 1: How to Draw Basic Shapes with SVG",
      to: "/day1",
    },
  ];

  return (
    <>
      <Header navs={navs} />
      <Routes>
        <Route path="/" element={<Nav navs={navs} />} />
        <Route path="/day1" Component={Day1} />
      </Routes>
    </>
  );
}

export default App;
