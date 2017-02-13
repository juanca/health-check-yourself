import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';

document.addEventListener('DOMContentLoaded', function(event) {
  function localStorageKey(key) {
    return `health-check-yourself-${key}`;
  }

  function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(localStorageKey(key)));
  }

  function setLocalStorage(key, object) {
    window.localStorage.setItem(key, JSON.stringify(object));
  }

  function onInputListChange(key, list) {
    setLocalStorage(localStorageKey(key), list);
  }

  ReactDOM.render(
    <Form
      weeklyGoals={getLocalStorage('weeklyGoals') || []}
      bad={getLocalStorage('bad') || []}
      good={getLocalStorage('good') || []}
      neutral={getLocalStorage('neutral') || []}
      onInputListChange={onInputListChange}
    />,
    document.querySelector('#content-container')
  );
});
