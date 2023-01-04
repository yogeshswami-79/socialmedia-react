import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar"
import './home.scss'

const Home = () => {
    return (
        <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
        </div>
    );
}

export default Home;