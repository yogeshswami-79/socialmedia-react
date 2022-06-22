import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar"


const Home = () => {
    return (
        <>
        <Topbar />
        <div className="homeContainer">

        </div>

        <Sidebar />
        <Feed />
        <RightBar />
        </>
    );
}

export default Home;