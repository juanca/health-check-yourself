import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';

document.addEventListener('DOMContentLoaded', function(event) {
  function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(`health-check-yourself-${key}`));
  }

  function setLocalStorage(key, object) {
    window.localStorage.setItem(JSON.stringify(object));
  }

  ReactDOM.render(
    <Form
      weeklyGoals={getLocalStorage('weeklyGoals') || []}
      bad={getLocalStorage('bad') || []}
      good={getLocalStorage('good') || []}
      neutral={getLocalStorage('neutral') || []}
    />,
    document.querySelector('#content-container')
  );
});
