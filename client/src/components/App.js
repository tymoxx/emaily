import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

import Header from "./Header";
const Dashbord = () => {return <h2>Dashbord</h2> };
const ServeyNew = () => {return <h2>ServeyNew</h2> };
const Landing = () => {return <h2>Landing</h2> };

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/surveys' component={Dashbord}/>
                    <Route path='/surveys/new' component={ServeyNew}/>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;