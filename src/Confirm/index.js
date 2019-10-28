import React from "react";
import propTypes from "prop-types";

export default class Modal extends React.Component{
  static propTypes = {
    isOpen: propTypes.bool,
    maskClosable: propTypes.bool,
    title: propTypes.string.isRequired,
    className: propTypes.string,
    onOk: propTypes.func,
    onCancel: propTypes.func,
    okText: propTypes.string,
    cancelText: propTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  }

  static defaultProps = {
    isOpen: false,
    maskClosable: true,
    className: propTypes.string,
    onOk: () => {},
    onCancel: () => {},
    okText: '确定',
    cancelText: '取消',
  }

  render () {
    console.log(this.props); 
    const { title, children, okText, cancelText } = this.props;
    return (
      <div>
        <div className="modal-header">
          {title}
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button >{okText}</button>
          <button >{cancelText}</button>
        </div>
      </div>
    )
  }
}