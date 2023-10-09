declare module "./store/Reducer" {
  const reducer: (state: AppState, action: AppAction) => AppState;
  export default reducer;
}
