import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/LoginSignIn/SignIn";
import { useContext, useState } from "react";
import SocialContext from "./Social.context";

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
            <SocialContext.Provider value={{ user, logIn, signUp, logOut }}>
                
            {
                loggedIn ? (<Main />) : (<SignIn />)
            }
            </SocialContext.Provider>
        </div>
    );
}

export default App;
