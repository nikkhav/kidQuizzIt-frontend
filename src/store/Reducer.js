const initalState = {
  loading: true,
  about: [],
  policy: [],
  terms: [],
  category: [],
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "ABOUT":
      return { ...state, about: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "POLICY":
      return { ...state, policy: action.payload };
    case "TERMS":
      return { ...state, terms: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
