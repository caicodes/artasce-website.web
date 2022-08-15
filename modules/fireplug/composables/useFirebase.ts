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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
      console.log(user)
    } else {
      // User is signed out
      //
    }
  })
}
