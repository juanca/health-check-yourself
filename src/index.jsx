import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';

document.addEventListener('DOMContentLoaded', function(event) {
  ReactDOM.render(<Form />, document.querySelector('#content-container'));
});
