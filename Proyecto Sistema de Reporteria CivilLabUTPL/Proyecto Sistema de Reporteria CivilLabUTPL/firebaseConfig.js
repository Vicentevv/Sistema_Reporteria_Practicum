import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv3rDdtFXVmpQqBRBMjSydUcukojhA5t0",
  authDomain: "civillabutpl-prueba.firebaseapp.com",
  databaseURL: "https://civillabutpl-prueba-default-rtdb.firebaseio.com",
  projectId: "civillabutpl-prueba",
  storageBucket: "civillabutpl-prueba.firebasestorage.app",
  messagingSenderId: "582557678793",
  appId: "1:582557678793:web:d60285c8b034b8efe66118",
  measurementId: "G-1ED5CV3FDJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
