/**
 *
 *  Artasce Creative
 *    FIREBASE PLUGIN
 *
 *    @/composables/useFirebase
 */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import { useFirebaseUser } from "./useState"

/**
 *
 * https://firebase.google.com/docs/auth/web/start#sign_up_new_users
 *
 */
export const createUser = async (email, password) => {
  const auth = getAuth()
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
  })
  return credentials
}

/**
 *
 * https://firebase.google.com/docs/auth/web/start#sign_in_existing_users
 *
 */
export const signInUser = async (email, password) => {
  const auth = getAuth()
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
  })
  return credentials
}

/**
 *
 * https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
 *
 */
export const initUser = async () => {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("initUser: ", user)
    } else {
      // User is signed out
      console.log("auth changed", user)
    }
    firebaseUser.value = user
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  console.log(result)
}
