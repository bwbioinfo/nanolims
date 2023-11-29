import Link from "next/link";
import SideDrawer from "./SideDrawer/SideDrawer";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <MenuIcon className="navbar-brand" />
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" href="/">
                NanoLIMS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/samples">
                Samples
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
