// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDq0Ntx4PfXBBpGCho9XFcuKWyxSlZoOaI",
    authDomain: "facturesapp-922c1.firebaseapp.com",
    projectId: "facturesapp-922c1",
    storageBucket: "facturesapp-922c1.appspot.com",
    messagingSenderId: "109332000135",
    appId: "1:109332000135:web:13470b3d25c4c9155e7722",
    measurementId: "G-ZM9L1ZFBJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
const analytics = getAnalytics(app);