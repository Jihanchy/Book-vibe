import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    const links =
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBooks'>Listed Books</NavLink></li>
        <li><NavLink to='/dashboard'>Pages to read</NavLink></li>
    </>
    return (
        <nav className="navbar bg-base-100 px-0 py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-6">
                            {links}
                    </ul>
                </div>
                <a className="font-bold text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4 ">
                <button className="btn md:btn-md btn-sm  text-sm text-white bg-[#23BE0A]">Sign in</button>
                <button className="btn md:btn-md btn-sm  text-sm text-white bg-[#59C6D2]">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;