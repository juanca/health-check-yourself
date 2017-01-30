import React from 'react';

import EmotionSelect from './emotion-select.jsx';
import InputList from './input-list.jsx';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <InputList
          legend="Weekly Goals"
          placeholder="Accomplish by next week."
          values={['hello world', 'hola mundo']}
        />

        <EmotionSelect id="work-emotion" legend="Overall work day" />

        <EmotionSelect id="day-emotion" legend="Overall day" />

        <InputList
          legend="Bad stuff"
          placeholder="1 bad stuff"
          values={['booo', 'waaah']}
        />

        <InputList
          legend="Good stuff"
          placeholder="1 good stuff"
          values={['weee', 'zweee']}
        />

        <InputList
          legend="Other stuff"
          placeholder="1 other stuff"
          values={['whomp whopm whomp whpom', 'piiiu']}
        />

        <button type="submit">Save!</button>
      </form>
    );
  }
}
