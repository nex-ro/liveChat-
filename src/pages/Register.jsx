import { useState } from "react";
import logo from "../asset/logo.png";
import firebase from "../firebase";

function Register() {

  const [getEmail, setEmail] = useState("")
  const [getPass, setpass] = useState("")
  const [getnotif, setNotif] = useState(false)
  const [getPesan,setPesan]=useState("")
  const InputEmail = (e) => {
    setEmail(e.target.value)
  }
  const InputPass = (e) => {
    setpass(e.target.value)
  }
  const notif=()=>{
    setNotif(!getnotif)
    setTimeout(()=>{setNotif((e)=>!e)},8000)
      
  }

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(getEmail, getPass)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        notif()
        setPesan(`<div class="mt-2 bg-teal-500 text-sm text-white rounded-lg p-4" role="alert">
        <span class="font-bold">Success</span> alert! Account Succesfuly created
      </div>`)
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        notif()
        setPesan(`<div class="mt-2 bg-red-500 text-sm text-white rounded-lg p-4" role="alert">
        <span class="font-bold">Danger</span> alert! `+errorMessage+`
      </div>`)
        console.log(errorCode, errorMessage)
        // ..
      });
  }

  return (
    <div className="flex justify-center items-center h-screen border">
      <div className="w-2/3 xl:w-1/3 bg-white flex justify-center rounded-lg	">
        {/* login */}
        <div className="p-6">

          <form class="w-full max-w-sm">
            <h1 className="w-full  flex justify-center text-center block text-gray-500 font-bold text-xl	">
              Register
            </h1>
            <div className="w-full  flex justify-center text-center my-4">
              <img className="m-5" src={logo} alt="" width="100px" />
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name">
                  Email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="email"
                  type="email"
                  placeholder=""
                  onChange={InputEmail}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4"
                  for="inline-password">
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={InputPass}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-2/3">
                <a href={"/"}>
                  <label
                    class="underline block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4"
                    for="inline-full-name">
                    Sudah punya akun?
                  </label>
                </a>
              </div>
            </div>
            {getnotif && (
  <div dangerouslySetInnerHTML={{ __html: getPesan }}></div>
)}
             <div class="md:flex md:items-center">
                        <div class="md:w-full">
                            <button onClick={register} class="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                register
                            </button>
                        </div>
                    </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
