import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello world!');

class Foo extends React.Component {
  render() {
    return <div>Boo!</div>;
  }
}

ReactDOM.render(<Foo />, document.body);
