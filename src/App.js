import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/LoginSignIn/SignIn";
import SideBar from "./components/Sidebar/Sidebar";
function App() {
    return (
        <div className="App">
            <SideBar />
            <SignIn/>
        </div>
    );
}

export default App;
