import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar"
import './home.css'
import Constants from '../../Utils/constants.json'

const Home = () => {
    return (
        <>
            <Topbar name={Constants.AppName} />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>

        </>
    );
}

export default Home;