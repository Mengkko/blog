import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// import 'firebase/firestore'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC0uNujAMZBRleTo1F1lrbNNj0MibAq0fk',
  authDomain: 'blog.myungwoo.dev',
  projectId: 'myungwoo-dev-blog',
  storageBucket: 'myungwoo-dev-blog.appspot.com',
  messagingSenderId: '447482557095',
  appId: '1:447482557095:web:e362cfb0fccfb161fee182',
  measurementId: 'G-RQM7CH1H42',
}

export default async function ({ store, redirect }) {
  console.log(process.env.NODE_ENV)
  const app = initializeApp(firebaseConfig)
  if (process.env.NODE_ENV === 'production') {
    getAnalytics(app)
  }
}
