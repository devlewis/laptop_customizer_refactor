import React from 'react';
import PartsList from '../PartsList/PartsList'



class PartsCustomizer extends React.Component {
render () {
    return (
<form className="main__form">
<h2>Customize your laptop</h2>
<PartsList 
  selected={this.props.selected}
  features={this.props.features}
  updateFeature={this.props.updateFeature}
  USCurrencyFormat={this.props.USCurrencyFormat}
  />
</form>
    )}
}


export default PartsCustomizer