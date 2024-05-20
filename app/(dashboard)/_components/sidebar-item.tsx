'use client';
import React, {FC} from 'react';
import {LucideIcon} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
   icon: Icon,
   label,
   href
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive =
        (pathname === '/' && href === '/') ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-small font-[500] pl-6 transition-all hover:text-slate-600",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {label}
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-sky-700 h-full border-2  transition-all",
                    isActive && "opacity-100"
                )}
            />
        </button>
    );
};

export default SidebarItem;