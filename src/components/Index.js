import React from 'react';

import api from '../api';

class Index extends React.Component {
  render() {
    let characters = api.characters();
    let creators = api.creators();
    let comics = api.comics();
    let events = api.events();


    console.log(comics);
    return (
      <div>
        <h1>Characters</h1>
        <ul>

        </ul>
      </div>
    );
  }
}

export default Index
