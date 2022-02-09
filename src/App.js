import "./App.css";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import MyNavbar from "./components/MyNavbar";
import LatestRelease from "./LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNavbar brand="StriveSchool" />
      <Jumbotron />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
