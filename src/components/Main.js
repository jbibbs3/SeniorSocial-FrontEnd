import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPosts from "../FeedComponent/UserPost";
import Sidebar from "./Sidebar/Sidebar";
import User from "./UserProfile/User";
import FeedComponent from "../FeedComponent/FeedComponent";
const Main = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            {/* <Routes>
                <Route>Posts</Route>
                <Route>Saved</Route>
                <Route>Message</Route>
                <Route>Profile</Route>
            </Routes> */}
            <FeedComponent/>
        </div>
    );
};

export default Main;
