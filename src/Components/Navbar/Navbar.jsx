import { BsThreeDots } from "react-icons/bs";


const Navbar = () => {

    return (

        <div>


            <div className="mb-60">
                <h2 className="text-center text-2xl font-bold bg-indigo-200 py-2">Navbar 1</h2>
                <div className="navbar md:px-5 lg:px-10 bg-slate-50">
                    <div className="md:navbar-start">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold">Title</h2>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-grow justify-end">
                        <div className="dropdown navLink">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <div className="flex-none navLink">
                            <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-5">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mb-60">
                <h2 className="text-center text-2xl font-bold bg-indigo-200 py-2">Navbar 3</h2>
                <div>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <a className="btn btn-ghost text-xl">Title</a>
                        </div>
                        <div className="navbar-end lg:hidden">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>About</a></li>
                                    <li><a>Services</a></li>
                                    <li><a>Skills</a></li>
                                    <li><a>Projects</a></li>
                                    <li><a>Timeline</a></li>
                                    <li><a>Testimonial</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-end hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>About</a></li>
                                <li><a>Services</a></li>
                                <li><a>Skills</a></li>
                                <li><a>Projects</a></li>
                                <li><a>Timeline</a></li>
                                <li><a>Testimonial</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div>
                <div className="navbar bg-slate-50 md:px-10 justify-around">
                    <div className="navbar-start w-1/2 lg:w-1/3">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <BsThreeDots className="text-2xl" />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navLink">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <a className="normal-case text-xl md:text-4xl text-amber-600 font-extrabold">Title</a>
                    </div>
                    <div className="navbar-center hidden lg:flex lg:flex-grow">
                        <ul className="menu menu-horizontal px-1 navLink">
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="navbar-end w-auto">
                        <button className="btn">Login</button>
                    </div>
                </div>
            </div> */}




        </div>
    );
};

export default Navbar;