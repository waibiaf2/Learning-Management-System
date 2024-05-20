import React from 'react';
import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image
                src='/logo.svg'
                alt="logo"
                height={130}
                width={130}
            />
        </div>
    );
};

export default Logo;