import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2-tSOzNJgS9wifIVvkvxkbpQkfo_H5rQ",
  authDomain: "mealstogo-53cac.firebaseapp.com",
  projectId: "mealstogo-53cac",
  storageBucket: "mealstogo-53cac.appspot.com",
  messagingSenderId: "776425536495",
  appId: "1:776425536495:web:d6dc989bdf36560238541a",
};

//  Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
