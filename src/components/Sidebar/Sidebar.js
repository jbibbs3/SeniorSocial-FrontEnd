import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SideBar = () => {
    return (
        <Sidebar>
            <Menu>
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideBar;
