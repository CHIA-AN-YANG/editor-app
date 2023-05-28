import { Component } from 'react';

abstract class BseEditableItem extends Component {
  code  = '';
  name  = '';

  copy(){
    /* store creates a new component, set code as timestampe */
  }

  paste(){
    /* created component append to a parent element */
  }

  delete(){
    /* store removes this component */
  }
}
