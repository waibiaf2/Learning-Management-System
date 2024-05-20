import React from 'react';
import Sidebar from "@/app/(dashboard)/_components/sidebar";
import Navbar from "@/app/(dashboard)/_components/navbar";

const DashboardLayout = ({
                             children
                         }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-screen flex">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar/>
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fix inset-y-0">
                <Sidebar/>
            </div>
            <main className="md:pl-5 pt-[80px] h-full pt-85">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;