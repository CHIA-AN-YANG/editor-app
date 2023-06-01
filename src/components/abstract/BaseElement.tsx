import { Component } from 'react';

abstract class BaseElement extends Component {
  code  = '';
  name  = '';
  zIndex = 0;
  position = { x:0, y:0 };

  copy(){
    /* store creates a new component, set code as el-timestamp */
  }

  paste(){
    /* created component append to editorArea */
  }

  delete(){
    /* store removes this component */
  }
}
