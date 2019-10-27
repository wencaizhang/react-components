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
    onChange (e) {
      console.log(e.target.value);
    }
  }
  render () {
    return (
      <input
        onChange={this.onChange}
      />
    )
  }
}
export default Input