import Head from "next/head";
import NavBar from "./NavBar";
import Copyright from "./Copyright";


function Layout({ children }) {
  return (
    <div className="wrapper">
      <Head>
        <title>NanoLIMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main>{children}</main>

      <footer className="footer">
        <a
          href=""
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by NanoLIMS
        </a>
        <Copyright />
        </footer>
    </div>
    );
}

export default Layout;
