/* eslint-disable max-len */
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  topArtists: null,
  recentlyPlayedTracks: null,
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

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        topArtists: action.topArtists,
      };

    case 'SET_RECENTLY_PLAYED_TRACKS':
      return {
        ...state,
        recentlyPlayedTracks: action.recentlyPlayedTracks,
      };

    default:
      return state;
  }
};

export default reducer;
