/* eslint-disable max-len */
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  // token:
  //   // eslint-disable-next-line max-len
  //   'BQCHA7OlWVkF8wNeRPpcMOYKkKlTMVyGSM_zVneHAhBSi6i-JJvPE6l8bPhHVwti5_vcenDWcRg_Zgrd4u22uJ8XU0d9Jq8boTEkqTVtVnfdLDBA-LTBkSEeRhl4APePuWGlHaMRCqHGn1ZL9BjaeeQ4H7VM0LwNZ1zHOhSm8nyCzkcq',
};

const reducer = (state, action) => {
  console.log('reducer_action👉', action);

  // Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
