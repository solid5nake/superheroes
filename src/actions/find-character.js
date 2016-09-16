export const FIND_CHARACTER = "FIND_CHARACTER"

export default function findCharacter(character) {
  return {
    type: FIND_CHARACTER,
    payload: character
  }
}
