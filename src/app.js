import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack</p>;
ReactDOM.render(template, document.getElementById('app'));

console.log(validator.isEmail('test@test.test'));