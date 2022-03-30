// inisiasi library default
import React, {useState} from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image-login.svg";
import google from "../../assets/icon-google.svg";

// inisiasi component

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  return (
          <>
            <div className="h-screen flex">
              <div className="flex w-1/2 justify-center items-center">
                <div>
                  <h1 className="font-semibold text-3xl">Login</h1>
                  <h3 className="text-2xl mt-2">Login to connect with us</h3>
                  {/* <form action="#" method="POST" className="mt-8"> */}
                    <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                                  placeholder="Enter your Email"
                    />
                    <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                                  placeholder="Enter your Password"
                    />
                    <label className="block text-red-500 mt-2 text-sm ml-64" onClick={() => setShowModal(true)} style={{cursor:'pointer'}}>Forget Password?</label>
                   <Link to='/galery'><button type="submit" className="justify-center mt-8 w-96 py-4 px-6 border border-transparent rounded-full text-lg font-medium text-white bg-red-500 ">Login</button></Link>
                  {/* </form> */}
                  <h6 className="text-sm mt-2 text-gray-400">Dont have account? <Link to="/register"><span className="text-red-500">sign up</span></Link></h6>
                  <div className="w-full flex items-center justify-between mt-8">
                    <hr class="w-24 bg-gray-400"></hr>
                    <p class="text-sm px-1.5 text-gray-400">or Sign In with google</p>
                    <hr class="w-24 bg-gray-400  "></hr>
                  </div>
                  <button className="flex w-96 mt-8 space-x-2 justify-center items-end border-2 text-white py-4 rounded-full">
                    <img src={google} alt="google" /> <div className="text-gray-400">Continue with google</div>
                  </button>
                </div>
              </div>
              <div className="flex w-1/2 justify-center items-center">
                <img src={image} alt="image-login"/>
              </div>
              {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-6 pt-8">
                  <h3 className="text-lg font-semibold">
                    Forgot Password
                  </h3>
                </div>
                <div className="relative px-6 pt-8 flex-auto">
                  <p className="text-black font-normal text-base leading-relaxed">
                  Masukan email yang sudah anda daftarkan untuk <br/> merubah password
                  </p>
                </div>
                <div className="relative px-6 pt-8 flex-auto">
                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                                  placeholder="Enter your Email"
                    />
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
            </div>
          </>
        );
};
export default Login;