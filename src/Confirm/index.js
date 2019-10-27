import React from "react";
import propTypes from "prop-types";


class Input extends React.Component{
  static propTypes = {
    value: propTypes.string,
    onChange: propTypes.func,
    size: propTypes.string
  }

  static defaultProps = {
    value: '',
    size: 'middle',
    onChange () {}
  }
  render () {
    console.log(this.props); 
    
    return (
      <input
        value={this.value}
        {...this.props}
      />
    )
  }
}
export default Input