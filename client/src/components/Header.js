import React, {Component} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return '...';
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return (
                    <>
                        <li><Payments/></li>
                        <li style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>
                        <li><a href='/api/logout'>Logout</a></li>
                    </>
                )
        }
    }

    render() {
        return (
            <nav className='nav-wrapper'>
                <Link
                    to={this.props.auth ? '/surveys' : '/'}
                    className='left brand-logo'
                >
                    Emaily
                </Link>
                <ul className='right'>
                    {this.renderContent()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps, null)(Header);