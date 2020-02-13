import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from "./Header";
const Dashbord = () => {return <h2>Dashbord</h2> };
const ServeyNew = () => {return <h2>ServeyNew</h2> };
const Landing = () => {return <h2>Landing</h2> };

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/surveys' component={Dashbord}/>
                        <Route path='/surveys/new' component={ServeyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}


export default connect(null, actions)(App);