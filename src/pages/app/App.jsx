import Home from "../home/Home";
import Topbar from "../../components/topbar/Topbar";
import Constants from '../../Utils/constants.json';
import Navbar from '../../components/navbar/Navbar';
import './app.scss';

function App() {

  return (
    <div className="app">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
