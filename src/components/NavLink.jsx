import { hr } from 'date-fns/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName=usePathname();

    const isActive=href===pathName
    return (
        <Link href={href} className={`${isActive ? "border-b-blue-600" : " "}`}></Link>
    );
};

export default NavLink;