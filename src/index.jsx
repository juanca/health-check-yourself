import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';

const fixtures = {
  weeklyGoals: [
    { done: true, value: 'hello world' },
    { done: false, value: 'hola mundo' },
  ],
  bad: [{ value: 'booo' }, { value: 'waaah' }],
  good: [{ value: 'weee' }, { value: 'zweee' }],
  neutral: [{ value: 'whomp whopm whomp whpom' }, { value: 'piiiu' }],
};


document.addEventListener('DOMContentLoaded', function(event) {
  window.localStorage.getItem('health-check-yourself')
  ReactDOM.render(
    <Form
      weeklyGoals={fixtures.weeklyGoals}
      bad={fixtures.bad}
      good={fixtures.good}
      neutral={fixtures.neutral}
    />,
    document.querySelector('#content-container')
  );
});
