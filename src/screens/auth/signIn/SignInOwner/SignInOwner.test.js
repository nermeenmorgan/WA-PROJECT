import React from 'react';
import ReactDOM from 'react-dom';
import SignInOwner from './SignInOwner';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInOwner />, div);
  ReactDOM.unmountComponentAtNode(div);
});