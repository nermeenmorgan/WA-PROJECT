import React from 'react';
import ReactDOM from 'react-dom';
import SignUpClient from './SignUpClient';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpClient />, div);
  ReactDOM.unmountComponentAtNode(div);
});