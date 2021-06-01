// import Deck from './Deck.js';

// function App() {
// 	return (
// 		<div>
// 			<Deck />
// 		</div>
// 	);
// }

// export default App;

import React, { Component } from 'react';
import Deck from "./Deck";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Deck />
      </div>
    );
  }
}
