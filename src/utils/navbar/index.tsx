import React from 'react'
import './components/styles.css'
import VOGZW from '../Icons/VOGZW'

function NavBar() {
    return (
        <div className="navbar-vogz">
            <div className="navbar-left-back">
                <i className="fal fa-long-arrow-left"></i>
            </div>
            <div className="navbar-right-vogz">
                <VOGZW  width="200" height="100" className="logo-vogz-navbar"/>
            </div>
        </div>
    )
}

export default NavBar
