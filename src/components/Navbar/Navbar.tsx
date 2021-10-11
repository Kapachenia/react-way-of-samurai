import React from "react";
import c from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={c.nav}>
            <div>
                <div className={c.item}>
                <Link to='/profile'>Profile</Link>
                </div>
                <div className={c.item}>
                <Link to='/dialogs'>Dialogs</Link>
                </div>
                <div className={c.item}>
                    <Link to='/news'>News</Link>
                </div>
                <div className={c.item}>
                    <Link to='/music'>Music</Link>
                </div>
                <div className={c.item}>
                    <Link to='/settings'>Settings</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar