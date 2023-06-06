import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FeedIcon from "@mui/icons-material/Feed";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "./SS Logo.jpg";
const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const style = {
        height: "100vh",
        backgroundColor: "#01FFFF",
        fontSize: "20px",
        fontWeight: "600",
        position: "absolute",
        top: "0",
        left: "0",
    };
    const bStyle = {
        width: '100%',
        backgroundColor:'#2d2dae',
    }
    return (
        <div>
            <div style ={bStyle}>
                <img src={logo} alt="" />
            </div>
            <Sidebar style={style} collapsed={collapsed}>
                <Menu>
                    <MenuItem icon={<FeedIcon />} component={<Link to="/posts" />}>
                        See Posts
                    </MenuItem>
                    <MenuItem icon={<FavoriteBorderIcon />} component={<Link to="/likes" />}>
                        Likes
                    </MenuItem>
                    <MenuItem icon={<EmailIcon />} component={<Link to="/message" />}>
                        Messaging
                    </MenuItem>
                    <MenuItem icon={<AccountCircleIcon />} component={<Link to="/profile" />}>
                        Profile
                    </MenuItem>
                    <MenuItem
                        icon={<ArrowForwardIosIcon />}
                        onClick={() => setCollapsed(!collapsed)}>
                        Close or Open
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
