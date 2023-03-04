import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import NavTabs from "./components/NavTabs";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <div className="mt-5">
        <NavTabs />
      </div>
      <div className="mt-5">
        <Cards />
      </div>
    </div>
  );
}

export default App;
