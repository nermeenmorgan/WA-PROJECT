import React from 'react';
import ReactDOM from 'react-dom';
import SignUpOwner from './SignUpOwner';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpOwner />, div);
  ReactDOM.unmountComponentAtNode(div);
});