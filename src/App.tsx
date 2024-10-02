import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./container/Header";
import Nav from "./container/Nav";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";

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
    {
      id: 3,
      title: "Day 3: How to Make a Gingerbread Figure with SVG",
      to: "/day3",
    },
    {
      id: 4,
      title: "Day 4: How to Build a House with SVG",
      to: "/day4",
    },
    {
      id: 5,
      title: "Day 5: How to Draw Basic Paths with SVG",
      to: "/day5",
    },
  ];

  return (
    <>
      <Header navs={navs} />
      <Routes>
        <Route path="/" element={<Nav navs={navs} />} />
        <Route path="/day1" Component={Day1} />
        <Route path="/day2" Component={Day2} />
        <Route path="/day3" Component={Day3} />
        <Route path="/day4" Component={Day4} />
        <Route path="/day5" Component={Day5} />
      </Routes>
    </>
  );
}

export default App;
