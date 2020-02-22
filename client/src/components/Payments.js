import React, {Component} from 'react';
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name = 'Emaily'
                description = '$5 for 5 email credits'
                amount = {500} // $5
                token = {(token) => {
                    this.props.handleToken(token)
                }} // callBack we receive from Stripe after authorization
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <div className='btn btn-flat'>add credits</div>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);