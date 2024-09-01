import { Link } from "react-router-dom";

type Nav = {
  id: number;
  title: string;
  to: string;
};

function Nav(prop: { navs: Nav[] }) {
  const { navs } = prop;

  return (
    <nav style={{ maxWidth: "500px", margin: "0 auto" }}>
      <ul style={{ textAlign: "left" }}>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.to}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
