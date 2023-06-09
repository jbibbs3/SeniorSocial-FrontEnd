import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/LoginSignIn/SignIn";

import SideBar from "./components/Sidebar/Sidebar";
import UserPosts from "./FeedComponent/UserPost";
import CreatePost from "./FeedComponent/CreatePost";


import LogSign from "./components/LoginSignIn/LogSign";
import { useContext, useState } from "react";
import SocialContext from "./Social.context";
import User from "./components/UserProfile/User";



function App() {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);
    const logIn = us => {
        setUser(us)
        setLoggedIn(true)
    } 
    const signUp = us => {
        //createUser(us)
        setUser(us)
        setLoggedIn(true)
    } 
    const logOut = (us) => {
        setUser({})
        setLoggedIn(false)
    }
    return (
        <div className="App">

            {/* <SignIn/> */}
            <Main></Main>


            
            {/* <SocialContext.Provider value={{ user, logIn, signUp, logOut }}>
                 */}
            {/* {
                loggedIn ? (<Main />) : (<SignIn />)
            } */}
            {/* <Main/>
            </SocialContext.Provider> */}


        </div>
    );

    

    
}

export default App;
