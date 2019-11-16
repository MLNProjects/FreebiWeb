const reducer = (state, action) => {
  switch (action.type) {
    case "toggleMenu":
      return {
        ...state,
        menu: action.menu,
      };
    case "toggleLogin":
      return {
        ...state,
        login: action.login,
      };
    case "changeAuthState":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
