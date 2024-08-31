import { Link, useLocation } from "react-router-dom";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

type Nav = {
  id: number;
  title: string;
  to: string;
};

function Header(prop: { navs: Nav[] }) {
  const { navs } = prop;

  const location = useLocation();

  const currentNav = navs.find((nav) => nav.to === location.pathname);

  return (
    <header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">
        <Link to="/" style={{ color: "#fff" }}>
          SVG Turorial In 24
        </Link>
      </h1>
      <h3>{currentNav?.title}</h3>
    </header>
  );
}
export default Header;
