    import React from 'react';
    import Part from '../Part/Part'
    import '../App.css';

    class PartsList extends React.Component {

    render () {
       return (
        Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend> 
              <Part 
                thisFeature={feature}
                generalFeature={this.props.features[feature]}
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
                USCurrencyFormat={this.props.USCurrencyFormat}
               />
            </fieldset>
          );
        })
       )
  }
}

export default PartsList