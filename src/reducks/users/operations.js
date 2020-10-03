import { signInAction, signOutAction, newBookAction } from "./actions";
import { auth, FirebaseTimestamp, db } from "../../firebase/index";
import { useNavigation } from "@react-navigation/native";
//pushを変更



export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            uid: uid,
            updated_at: timestamp,
            username: username,
            books: [],
            pages: 0,
          };
          
          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              alert('アカウント登録が完了しました')
            });
        }
      });
  };
};

export const signIn = (email, password) => {
  
  return async (dispatch) => {
    // validation
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;

          db.collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
              const data = snapshot.data();

              dispatch(
                signInAction({
                  isSignedIn: true,
                  uid: uid,
                  username: data.username,
                  books: data.books,
                  pages: data.pages,
                })
              );
              
            });
        }
      })
      .catch((error) => alert(error));
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
    })
    .catch((error) => {
      alert(error)
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert("パスワードリセット用のメールが送信されました");
        })
        .catch(() => {
          alert("パスワードリセットに失敗しました");
        });
    }
  };
};

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                username: data.username,
                books: data.books,
                pages: data.pages,
              })
            );
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const searchAndSetBook = (isbn,uid,pages,books) => {
  return async (dispatch, getState) => {
    // 本のデータを取得
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${isbn}&maxResults=1`,
      {}
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("データの取得に失敗しました");
        }
      })
      .then((data) => {
        //  必要なデータのオブジェクトを作成
        return {
          title: data.items[0].volumeInfo.title,
          pages: data.items[0].volumeInfo.pageCount,
          image: data.items[0].volumeInfo.imageLinks["thumbnail"],
        };
      })
      .then((book) => {
        // const uid = getState().users.uid;
        // const pages = getState().users.pages;
        // const books = getState().users.books;

        const newPages = pages + book["pages"];
        books.unshift(book);

        // ストアを更新
        dispatch(
          newBookAction({
            pages: newPages,
            books: books
          })
        );

        //  データベースを更新
        db.collection("users").doc(uid).update({
          pages: newPages,
          books: books
        });
      })
      .then(() => {
        alert("登録が完了しました");
      })
      .catch((error) => {
        alert(`エラー！: ${error}`);
      });
  };
};

export const deleteBook = (title, pages) => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const oldPages = getState().users.pages;
    const oldBooks = getState().users.books;

    const newPages = oldPages - pages;
    const newBooks = oldBooks.filter((book) => book.title !== title);

    dispatch(
      newBookAction({
        pages: newPages,
        books: newBooks,
      })
    );

    db.collection("users")
      .doc(uid)
      .update({
        pages: newPages,
        books: newBooks,
      })
      .then(() => {
        alert("削除しました。更新してください");
      })
      .catch((error) => {
        alert(`エラー！: ${error}`);
      });
  };
};
