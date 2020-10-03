export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
      books: userState.books,
      pages: userState.pages,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
      books: [],
      pages: 0,
    },
  };
};

export const NEW_BOOK = "NEW_BOOK";
export const newBookAction =(userState) => {
  return {
    type: "NEW BOOK",
    payload: {
      books:userState.books,
      pages:userState.pages
    }
  }
}

