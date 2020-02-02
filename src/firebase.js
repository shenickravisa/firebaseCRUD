import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyChRi1GQZKpX0rYOk1V7PCBLTS-GkYEQY0',
  authDomain: 'fir-tutorial-3f8db.firebaseapp.com',
  databaseURL: 'https://fir-tutorial-3f8db.firebaseio.com',
  projectId: 'fir-tutorial-3f8db',
  storageBucket: 'fir-tutorial-3f8db.appspot.com',
  messagingSenderId: '495392919220',
  appId: '1:495392919220:web:c5fd8b2edad852cfd451e1',
  measurementId: 'G-NE6WKJH1PQ'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
