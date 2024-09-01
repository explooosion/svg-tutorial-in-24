import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./container/Header";
import Nav from "./container/Nav";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";

function App() {
  const navs = [
    {
      id: 1,
      title: "Day 1: How to Draw Basic Shapes with SVG",
      to: "/day1",
    },
    {
      id: 2,
      title: "Day 2: How to Build a Christmas Tree with SVG",
      to: "/day2",
    },
  ];

  return (
    <>
      <Header navs={navs} />
      <Routes>
        <Route path="/" element={<Nav navs={navs} />} />
        <Route path="/day1" Component={Day1} />
        <Route path="/day2" Component={Day2} />
      </Routes>
    </>
  );
}

export default App;
