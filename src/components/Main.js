import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import User from "./UserProfile/User";
const Main = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Routes>
                <Route>Posts</Route>
                <Route>Saved</Route>
                <Route>Message</Route>
                <Route>Profile</Route>
            </Routes>
        </div>
    );
};

export default Main;
