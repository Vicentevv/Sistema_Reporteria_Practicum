import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAF_e3O8XxWaD5Ch98ZhpJAFvp6yuPEpbg",
  authDomain: "psicologialab-pruebas.firebaseapp.com",
  databaseURL: "https://psicologialab-pruebas-default-rtdb.firebaseio.com",
  projectId: "psicologialab-pruebas",
  storageBucket: "psicologialab-pruebas.firebasestorage.app",
  messagingSenderId: "118509558686",
  appId: "1:118509558686:web:f8fff279ee4dac9f21148f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
