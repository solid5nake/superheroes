import React from 'react';

import api from '../api';

class Index extends React.Component {
  render() {
    var characters = api.characters();

    console.log(characters);
    return (
      <div>
        <h1>Characters</h1>
        <ul>
          {
            characters.map(function(name, index) {
              return <li>{name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index
