

export function loadCharacters() {
  return (dispatch, getState, client) =>
    client.swagger();
}
