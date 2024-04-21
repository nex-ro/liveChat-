import logo from '../asset/logo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from '../firebase'
function Login() {
    // insialisasi
    const navigate = useNavigate();
    const [getEmail, setEmail] = useState("")
    const [getPass, setpass] = useState("")
    const [getnotif, setNotif] = useState(false)
    const [getPesan, setPesan] = useState("")

    // end inisialisasi
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

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(getEmail, getPass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                notif()
        setPesan(`<div class="mt-2 bg-teal-500 text-sm text-white rounded-lg p-4" role="alert">
        <span class="font-bold">Success</span> alert! Account Succesfuly created
      </div>`)

                console.log(user)
                navigate("/main");

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
                notif()
                setPesan(`<div class="mt-2 bg-red-500 text-sm text-white rounded-lg p-4" role="alert">
                <span class="font-bold">Danger</span> alert! `+errorMessage+`
              </div>`)
            });
    }
    return (
        <div className="flex justify-center items-center h-screen border">
            <div className="w-1/3 xl:w-1/3 bg-white flex justify-center rounded-lg	">
                <div className="p-6">

                    <form class="w-full max-w-sm">
                        <h1 className='w-full  flex justify-center text-center block text-gray-500 font-bold text-xl	'>Login</h1>
                        <div className="w-full  flex justify-center text-center my-4 ">
                            <img className='m-5' src={logo} alt="" width="100px" />
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label    class="block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Email
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input onChange={InputEmail} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4" for="inline-password">
                                    Password
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input onChange={InputPass} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="******************" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-2/3">
                                <a href={'/register'}><label class="underline block text-gray-500 font-bold md:text-left text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Belum punya akun ?
                                </label></a>
                            </div>

                        </div>
                        {getnotif && (
  <div dangerouslySetInnerHTML={{ __html: getPesan }}></div>
)}
                        <div class="md:flex md:items-center">
                            <div class="md:w-full">
                                <button onClick={login} class="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login;