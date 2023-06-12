import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserPosts from "../FeedComponent/UserPost";
import Sidebar from "./Sidebar/Sidebar";
import User from "./UserProfile/User";
import FeedComponent from "../FeedComponent/FeedComponent";

import MyPosts from "./MyPosts/MyPosts";


const Main = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts } =
        useContext(SocialContext);
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((res) => res.json())
            .then((fetchPosts) => setPosts([...posts, ...fetchPosts]));
            console.log([...posts]);
    },[]);
    return (
        <div>
            <Sidebar></Sidebar>
            <Routes>
                <Route>Posts</Route>
                <Route>Saved</Route>
                <Route>My Posts</Route>
                <Route>Profile</Route>

            </Routes>
            <FeedComponent/>

            </Routes> */}
        </div>
    );
};

export default Main;
