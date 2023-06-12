
import UserPosts from "./UserPost";
import CreatePost from "./CreatePost";
import { useContext } from "react";
import SocialContext from "../SocialContext";
const FeedComponent = () => {
    const { user, setUser, posts, setPosts, savedPosts, setSavedPosts, myPosts, setMyPosts } =
        useContext(SocialContext);
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column'
    }


    return (
        <div className="Feed" style = {style}>
            <CreatePost />
            {
                posts.map(post => (<UserPosts firstName={post.firstName} text={post.text} />))
        }
        </div>
    )





}


export default FeedComponent