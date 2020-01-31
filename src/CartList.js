import React from 'react';


class CartList extends React.Component {

    render() {
        console.log('selected passed to CartList', this.props.selected);
        return (
            
            Object.keys(this.props.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.props.selected[feature];
                console.log("selectedOption in CartList",selectedOption)
    
                return (
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {this.props.USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                );
            }
            )
        )
    }
}

export default CartList