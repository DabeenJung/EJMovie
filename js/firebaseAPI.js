const firebaseConfig = {
    apiKey: "AIzaSyARHYUoHeIFtqp-m_2fH0eALxLJ8zSLAi0",
    authDomain: "ej-movie.firebaseapp.com",
    projectId: "ej-movie",
    storageBucket: "ej-movie.appspot.com",
    messagingSenderId: "351782231686",
    appId: "1:351782231686:web:5563240e0a8af46f8a3b07"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();