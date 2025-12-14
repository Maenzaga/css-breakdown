import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Link to="/" className="appTitle">
          <h2> CSS Breakdown </h2>
        </Link>
        <div id="routesContainer">
          <Link to="/basics">Basics</Link>
          <Link to="/flex">Flex</Link>
          <Link to="/grid">Grid</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>Footer</span>
      </footer>
    </>
  );
}

export default App;
