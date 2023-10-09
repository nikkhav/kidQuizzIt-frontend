const initalState = {
  load: false,
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    // case "CHANGE_LANG":
    //   return { ...state, language: action.payload };
    default:
      return state;
  }
}
