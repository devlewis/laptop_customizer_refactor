import React from 'react';
import '../App.css';
import slugify from 'slugify';

class Part extends React.Component {
  
  render() {
    return (
      this.props.generalFeature.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(JSON.stringify(this.props.generalFeature))}
              checked={item.name === this.props.selected[this.props.generalFeature]}
              onChange={e => this.props.updateFeature(this.props.thisFeature, item)}
            />
      
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
          
        );
      })
    ) 
  }
}

export default Part