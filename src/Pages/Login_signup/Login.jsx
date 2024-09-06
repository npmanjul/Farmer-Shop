import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in successfully");
                // window.location.href = "/profile";
                navigate("/profile");
                toast.success("User logged in successfully!", {
                    position: "top-center",
                });
            } catch (error) {
                console.log(error.message);
                toast.error("Login failed: " + error.message, {
                    position: "bottom-center",
                });
            }
        };
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            // window.location.href = "/profile";
            navigate("/profile");
            toast.success("User logged in successfully!", {
                position: "top-center",
            });
        } catch (error) {
            console.log(error.message);
            toast.error("Login failed: " + error.message, {
                position: "bottom-center",
            });
        }
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                toast.success("User logged in successfully", {
                    position: "top-center",
                });
                window.location.href = "/profile";
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Google login failed: " + error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className='flex items-center justify-center  h-[90vh] bg-emerald-600 px-8'>
            <div className="flex  bg-gradient-to-br from-green-200 to-yellow-200 rounded-lg shadow-lg overflow-hidden mx-auto  lg:w-full max-w-4xl sm:w-1/2 w-full">
                <div className="hidden lg:block lg:w-1/2 bg-cover bg-backgroundImageLogin bg-no-repeat bg-center border-r-2 border-emerald-600"

                />
                <div className="w-full p-8 lg:w-1/2 lg:py-16">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Farmify</h2>
                    <p className="text-lg text-gray-600 text-center">Welcome back!</p>
                    <div onClick={googleLogin} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 bg-white/80 cursor-pointer" role='button'>
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107" />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00" />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50" />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2" />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold whitespace-nowrap">Sign in with Google</h1>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>





                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='username'>Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"
                                id="username"
                                name="username"
                                placeholder="anjuldev@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='password'>Password</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"
                                id="password"
                                name="password"
                                placeholder="sachan..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type='submit'>Login</button>
                        </div>
                    </form>





                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/signup" className="text-xs text-gray-500 uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}


export default Login