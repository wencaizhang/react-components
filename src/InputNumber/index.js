import React from "react";
import propTypes from "prop-types";
import './icon.css';
import './index.css';

class InputNumber extends React.Component {
  static propTypes = {
    value: propTypes.number,
    onChange: propTypes.func,
    size: propTypes.string
  }

  static defaultProps = {
    onChange(e) {
      console.log(e.target.value);
    }
  }
  render() {
    const { defaultValue, value, onChange } = this.props;
    const v = defaultValue || value;
    return (
      <div className="input-number">
        <div className="icon-wrapper" onClick={() => onChange(v + 1)}>
          <div className="css-icon icon-plus" />
        </div>
        <input
          value={v}
          onChange={e => onChange(e.target.value)}
        />
        <div className="icon-wrapper" onClick={() => onChange(v - 1)}>
          <div className="css-icon icon-minus" />
        </div>
      </div>
    )
  }
}

export default InputNumber