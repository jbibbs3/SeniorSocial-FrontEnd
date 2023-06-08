import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FeedIcon from "@mui/icons-material/Feed";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "./SS Logo.jpg";
import UserPosts from "../../FeedComponent/UserPost";
const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const style = {
        height: "100%",
        backgroundColor: "#01FFFF",
        fontSize: "20px",
        fontWeight: "600",
        position: "fixed",
        top: "0",
        left: "0",
    };
    const bStyle = {
        width: '100%',
        backgroundColor: '#2d2dae',
        position: "fixed",
        top: "0",
        left: "0",
    }
    const iStyle = {
        width:'30%'
    } 
    const tStyle = {
        fontSize:'100px'
    } 
    const pStyle = {
        margin: '6px'
        
    } 
    return (
        <div>
            <div style ={bStyle}>
                <img src={logo} alt="" style ={iStyle} />
            </div>
            <Sidebar style={style} collapsed={collapsed} collapsedWidth="80px">
                <Menu >
                    <MenuItem icon={<FeedIcon fontSize='large'/>} component={<Link to="/posts" />} style={ pStyle}>
                        See Posts
                    </MenuItem>
                    <MenuItem icon={<FavoriteBorderIcon fontSize='large'/>} component={<Link to="/likes" />} style={ pStyle}>
                        Likes
                    </MenuItem>
                    <MenuItem icon={<EmailIcon fontSize='large'/>} component={<Link to="/message" />} style={ pStyle}>
                        Messaging
                    </MenuItem>
                    <MenuItem icon={<AccountCircleIcon fontSize='large'/>} component={<Link to="/profile" />} style={ pStyle}>
                        Profile
                    </MenuItem>
                    <MenuItem
                        icon={<ArrowForwardIosIcon fontSize='large' />}
                        onClick={() => setCollapsed(!collapsed)} style={ pStyle}>
                        Close or Open
                    </MenuItem>
                </Menu>
            </Sidebar>


            {/* <div style={tStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora illo earum totam odit at dolorem temporibus quo fuga similique perspiciatis atque, officiis quisquam consequuntur impedit quos nam maxime quasi, esse quod! Reiciendis ullam dignissimos officiis incidunt mollitia sed distinctio nihil eveniet. Amet quibusdam deserunt quaerat similique ullam quod inventore dolore.</div> */}

            <div> <UserPosts /></div>

        </div>
    );
};

export default SideBar;
