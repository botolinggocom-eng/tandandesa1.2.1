import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAH1TF_ro6mL2919n5C2Uc2M9eicn56R6Y",
  authDomain: "tandandesa-d4116.firebaseapp.com",
  databaseURL: "https://tandandesa-d4116-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tandandesa-d4116",
  storageBucket: "tandandesa-d4116.firebasestorage.app",
  messagingSenderId: "1099115232211",
  appId: "1:1099115232211:web:dffa4d8141a79bc3500d26"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function simpan(path, data){
  set(ref(db, path), data); // 🔥 WAJIB set
}

export function baca(path, callback){
  onValue(ref(db, path), (snap)=>{
    callback(snap.val());
  });
}