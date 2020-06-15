import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBjWdJFpZI75ekSu85lJUkdfL-qJGYTwPI",
    authDomain: "react-todo-dfaf3.firebaseapp.com",
    databaseURL: "https://react-todo-dfaf3.firebaseio.com",
    projectId: "react-todo-dfaf3",
    storageBucket: "react-todo-dfaf3.appspot.com",
    messagingSenderId: "541810905896",
    appId: "1:541810905896:web:535973b8e16e3e3a51361d"
});

var db = firebase.firestore();

export { db }