import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Keep this module beside the Admin HTML file and serve both over HTTPS.
const firebaseConfig = {
  apiKey: "AIzaSyDAcZPfbf3StEVTfNmMwp_dYBHsw8WrijQ",
  authDomain: "wb-exam-mock-hub-bf095.firebaseapp.com",
  projectId: "wb-exam-mock-hub-bf095",
  storageBucket: "wb-exam-mock-hub-bf095.firebasestorage.app",
  messagingSenderId: "140842476702",
  appId: "1:140842476702:web:e2c426aa90775dbfaec78f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const contentDoc = doc(db, "appData", "content");

export async function pullContent() {
  const snapshot = await getDoc(contentDoc);
  return snapshot.exists() ? snapshot.data() : null;
}

export async function pushContent(data) {
  await setDoc(contentDoc, { ...data, updatedAt: Date.now() });
}
