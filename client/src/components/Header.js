import React, {Component} from "react";
import {connect} from 'react-redux'

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return '...';
            case false:
                return 'Logged OUT';
            default:
                return 'Logged In';
        }
    }

    render() {
        return(
            <nav className='nav-wrapper'>
                <a className='left brand-logo'>Emaily</a>
                <ul className='right'>
                    {this.renderContent()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return { auth }
}

export default connect(mapStateToProps, null)(Header);