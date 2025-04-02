import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";


export default function Layout () {
    return(
        <div className="w-full bg-[#f2f7fb]">  
            <SideNav />
            <div className="flex bg-[#f2f7fb] pt-[80px] pl-[280px] min-h-[100vh]">
                <TopNav />
                <div className="p-[30px] w-full">
                    <Outlet />
                </div>
            </div>     
        </div>
    )
}