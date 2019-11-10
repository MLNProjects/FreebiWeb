const reducer = (state, action) => {
  switch (action.type) {
    case "toggleMenu":
      return {
        ...state,
        menu: action.menu
      };
    default:
      return state;
  }
};

export default reducer;
