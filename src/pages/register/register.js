// inisiasi library default
import React from "react";
import {Link} from "react-router-dom";
import image from "../../assets/image-login.svg";
import google from "../../assets/icon-google.svg";

// inisiasi component

export default class Registrasi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <div className="h-screen flex">
          <div className="flex w-1/2 justify-center items-center">
            <div>
              <h1 className="font-semibold text-3xl">Sign Up</h1>
              <h3 className="text-2xl mt-2">Sign up to connect with us</h3>
              <form action="#" method="POST" className="mt-8">
                <input
                              type="text"
                              name="name"
                              id="name"
                              className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                              placeholder="Your name"
                />
                <input
                              type="email"
                              name="email"
                              id="email"
                              className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                              placeholder="Enter your Email"
                />
                <input
                              type="text"
                              name="roles"
                              id="name"
                              className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                              placeholder="User role"
                />
                <input
                              type="password"
                              name="password"
                              id="password"
                              className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                              placeholder="Enter your Password"
                />
                {/* <label className="block text-red-500 mt-2 text-sm ml-64">Forget Password?</label> */}
                <button type="submit" className="justify-center mt-8 w-96 py-4 px-6 border border-transparent rounded-full text-lg font-medium text-white bg-red-500 ">Sign Up</button>
              </form>
              <h6 className="text-sm mt-2 text-gray-400">Already have account? <Link to="/"><span className="text-red-500"> Login</span></Link></h6>
              <div className="w-96 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sed vestibulum lectus enim, aliquet..</div>
              <div className="w-full flex items-center justify-between mt-8">
                <hr class="w-24 bg-gray-400"></hr>
                <p class="text-sm px-1.5 text-gray-400">or Sign Up with google</p>
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
        </div>
      </>
    );
  }
}
