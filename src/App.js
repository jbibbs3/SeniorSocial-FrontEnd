import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/LoginSignIn/SignIn";
import SideBar from "./components/Sidebar/Sidebar";
import UserPosts from "./FeedComponent/UserPost";
import CreatePost from "./FeedComponent/CreatePost";
function App() {
    return (
        <div className="App">
            {/* <SignIn/> */}
            {/* <SideBar /> */}
            <CreatePost />

        </div>
    );
}

export default App;
