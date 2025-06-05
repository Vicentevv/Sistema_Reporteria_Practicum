import { database } from './firebaseConfig.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

export async function obtenerPracticas() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'Practices'));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {};
  }
}
