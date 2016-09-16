import { GET_CHARACTERS } from '../actions/fetch-characters'
import { FIND_CHARACTER } from '../actions/find-character'

export default function updateCharacters( state = [], { type, payload } ) {
  switch (type) {
    case GET_CHARACTERS :
      return payload

    case FIND_CHARACTER :
      return payload

    default :
      return state
  }
}
