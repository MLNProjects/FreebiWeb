import auth from "../base";

let currentUser;
auth.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (user) {
    currentUser = user;
  } else {
    currentUser = "undefined";
  }
});

const initialState = {
  menu: { toggle: false },
  login: { toggle: true },
  user: { uid: currentUser },
};

export default initialState;
