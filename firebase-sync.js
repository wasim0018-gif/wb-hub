import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⬇️ Firebase Console → Project Settings → Your apps → Web → Config ⬇️
const firebaseConfig = {
  apiKey: "AIzaSyDAcZPfbf3StEVTfNmMwp_dYBHsw8WrijQ",
  authDomain: "wb-exam-mock-hub-bf095.firebaseapp.com",
  projectId: "wb-exam-mock-hub-bf095",
  storageBucket: "wb-exam-mock-hub-bf095.firebasestorage.app",
  messagingSenderId: "140842476702",
  appId: "1:140842476702:web:e2c426aa90775dbfaec78f"
};
// ⬆️ উপরে আপনার তথ্য বসান ⬆️

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function pullContent() {
  const snap = await getDoc(doc(db, "appData", "content"));
  return snap.exists() ? snap.data() : null;
}

export async function pushContent(data) {
  await setDoc(doc(db, "appData", "content"), { ...data, updatedAt: Date.now() });
}