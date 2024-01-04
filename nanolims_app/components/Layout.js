import NavBar from "./NavBar";
import Copyright from "./Copyright";
import withAuth from "@components/hocs/withAuth";

function Layout(props) {

    return (
      <div className="wrapper">
        <NavBar />

        <main>{props.children}</main>

        <footer className="footer">
          <a href="" target="_blank" rel="noopener noreferrer">
            Powered by NanoLIMS
          </a>
          <Copyright />
        </footer>
      </div>
    );
}

export default withAuth(Layout);
