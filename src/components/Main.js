import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import User from "./UserProfile/User";
import UserPosts from "../FeedComponent/UserPosts";
import FeedComponent from "../FeedComponent/FeedComponent";
const Main = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Routes>
                <Route><UserPosts /></Route>
                <Route>Posts</Route>
                <Route><FeedComponent/></Route>
                <Route>Saved</Route>
                <Route>Message</Route>
                <Route>Profile</Route>
            </Routes> 
             <User/>
        </div>
    );
};

export default Main;
