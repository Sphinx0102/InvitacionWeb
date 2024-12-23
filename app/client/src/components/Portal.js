import React from 'react';
import ReactDOM from 'react-dom';


const portalRoot = document.getElementById('portal');

export default class Portal extends React.Component {

  constructor() {
    super();
    this.element = document.createElement('div');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.element);
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.element
    );
  }

}
