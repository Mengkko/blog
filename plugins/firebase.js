import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// import 'firebase/firestore'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

export default async function ({ store, redirect }) {
  const app = initializeApp(firebaseConfig)
  if (process.env.NODE_ENV === 'production') {
    getAnalytics(app)
  }
}
