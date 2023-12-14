document.addEventListener("DOMContentLoaded", (event) => {
  const postContainer = document.getElementById("post-container");

  const {
    initializeApp,
    applicationDefault,
    cert,
  } = require("firebase-admin/app");
  const {
    getFirestore,
    Timestamp,
    FieldValue,
    Filter,
  } = require("firebase-admin/firestore");

  const app = firebase.app();

  myPost.get().then((doc) => {
    const data = doc.data();
    postContainer.innerHTML = `<li><p>${data.title}</p> <p>${data.createdAt}</p></li>`;
    console.log(`Post: ${myPost}, Title: ${data.title}`);
  });
});
function googleLogin() {
  const accountContainer = document.getElementById("account-container");
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      accountContainer.innerHTML = `Hello ${user.displayName}`;
      console.log(user);
    });
}
