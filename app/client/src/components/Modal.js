import React, { Component } from 'react';
import { Portal, Image, AnimationIcon } from 'components';


export default class Modal extends Component {

  componentDidUpdate() {
    const { width, height } = this.props;
    let modalWindow = document.getElementById('modal_window');
    if (modalWindow) {
      if (width) modalWindow.style.width = width.toString() + 'vh';
      if (height) modalWindow.style.height = height.toString() + 'vh';
    }
  }

  render() {
    const { children, label='', toggle, active, className='', icon=null } = this.props;

    return (
      <Portal>
        { active &&
          <div className='modal'>

            <div className='modal__window'>
              <Image className='modal__flower__back' variant="flower_group04_A"/>
              <div className='modal__window__content'>
                <div className={`modal__content ${className}`}>
                  <div className='modal__window__close' onClick={toggle}>X</div>
                  { icon &&
                    <div className='modal__icon'>
                      <AnimationIcon className='modal__icon__anim' variant={icon}/>
                    </div>
                  }

                  <h5>{label}</h5>
                  <div className="modal__content__body">
                    { children }
                  </div>
                </div>
              </div>
            </div>
            <div className='modal__background' onClick={toggle}/>
          </div>
        }
      </Portal>
    )
  }
}
