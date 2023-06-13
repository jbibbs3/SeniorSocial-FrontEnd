import React from "react";
import UserPosts from "../../FeedComponent/UserPost";
import { useContext } from "react";
import SocialContext from "../../SocialContext";
const MyPosts = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts } =
        useContext(SocialContext);

    return (
        <div>
            {myPosts.map((posts) => (
                <UserPosts firstName={posts.firstName} text={posts.text} />
            ))}
        </div>
    );
};

export default MyPosts;
