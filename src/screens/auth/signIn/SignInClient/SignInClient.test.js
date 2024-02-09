import React from 'react';
import ReactDOM from 'react-dom';
import SignInClient from './SignInClient';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInClient />, div);
  ReactDOM.unmountComponentAtNode(div);
});