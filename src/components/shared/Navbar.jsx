import React from 'react';
import Logo from '../Logo/Logo';
import NavLink from './NavLink';
import Link from 'next/link';
import { GrCart } from "react-icons/gr";

const Navbar = () => {

    const nav =
        <>
            <li>
                <NavLink href={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink href={'/products'}>Products</NavLink>
            </li>
            <li>
                <NavLink href={'/blog'}>Blog</NavLink>
            </li>
            <li>
                <NavLink href={'/contact'}>Contact</NavLink>
            </li>
        </>

    return (
        <nav>
            <div className='container'>
                <div className="navbar px-0 py-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {nav}
                            </ul>
                        </div>
                        <Logo></Logo>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {nav}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link href={'/cart'} className='w-9.5 h-9.5 flex justify-center items-center rounded-full hover:bg-primary hover:text-white duration-300 mr-2'>
                            <GrCart />
                        </Link>
                        <Link href={'/login'}>
                            <button className='py-2 px-6 rounded-sm bg-primary text-white cursor-pointer hover:bg-primary/80 duration-200'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;