import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import FeedIcon from '@mui/icons-material/Feed';
const SideBar = () => {
    return (
        <Sidebar>
            <Menu>
                <MenuItem icon={ <FeedIcon/>}> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideBar;
