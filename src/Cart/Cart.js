import React from 'react';
import CartList from '../CartList/CartList.js'
import Total from '../Total/Total.js';


class Cart extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartList
                    updateFeature={this.props.updateFeature}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}
                />
                <Total
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}
                />
            </section>
        )
    }
}

export default Cart