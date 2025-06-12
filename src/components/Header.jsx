import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import WelcomeMessage from "./WelcomeMessage";

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext)
    const handleSignOut = ()=>{
        logoutUser()
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/learn">Let’s Learn</NavLink></li>
        <li><NavLink to="/tutorials">Tutorials</NavLink></li>
    </>
    return (
        <div>
            {
                user && user.email ? <WelcomeMessage message={user.email}></WelcomeMessage> : <div></div>
            }
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Lingo Bingo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        (user && user.email) ? <button onClick={handleSignOut} className="btn">SignOut</button> : <Link to='/login' className="btn">LogIn</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;