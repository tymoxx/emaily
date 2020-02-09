import React, {Component} from "react";

class Header extends Component {
    render() {
        return(
            <nav className='nav-wrapper'>
                <a className='left brand-logo'>Emaily</a>
                <ul className='right'>
                    <li>
                        <a>Log in with Google</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;