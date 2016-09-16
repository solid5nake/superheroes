import findCharacter from './find-character'

export const GET_CHARACTERS = 'GET_CHARACTERS'

export default function fetchCharacters() {
  return dispatch => {
    dispatch(findCharacter())


  }
}


function getCharacters(characters) {
  return {
    type: GET_CHARACTERS,
    payload: characters.data,
  }
}
