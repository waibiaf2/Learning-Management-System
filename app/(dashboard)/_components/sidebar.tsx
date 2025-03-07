import React from 'react';
import Logo from "@/app/(dashboard)/_components/logo";
import SidebarRoutes from "@/app/(dashboard)/_components/sidebar-routes";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto inset-y-0 z-50">
           <div className="p-6">
               <Logo/>
           </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes/>
            </div>
        </div>
    );
};

export default Sidebar;