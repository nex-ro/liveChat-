import firebase  from "../firebase";
function Main() {
    const cekUser = () => {
        const user = firebase.auth().currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getIdToken() instead.
            const uid = user.uid;
            console.log(user)
        }
    }
    cekUser()
    return (
        <p>Main</p>
    )

}
export default Main