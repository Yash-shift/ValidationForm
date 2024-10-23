import React, { useState } from "react";
import LoginForm  from "./LoginForm";
import SignUp from "./SignUp";


const Authapp = () => {
  const [isLogin, setIsLoggedIn] = useState(true);

  return (
    <div className="flex flex-col mx-5 mt-5 px-6 py-7 rounded-lg shadow-slate-560 shadow shadow-xl bg-white ">
      <div className="text-black font-bold text-2xl italic">Login to Access Exxclusive Content </div>
      <div className="flex justify-between px-3 bg-blue-400 rounded-xl mt-5 px-5 py-5">
        <button
          className={isLogin ? "text-white font-bold bg-black rounded-md px-2 py-2" : "font-bold bg-white rounded-md px-2 py-2"}
          onClick={() => setIsLoggedIn(true)}
        >
          LOGIN
        </button>
        <button 
          className={!isLogin ? "text-white font-bold bg-black rounded-md px-2 py-2" : "font-bold bg-white rounded-md px-2 py-2"}
          onClick={() => setIsLoggedIn(false)}
        >
          SINGUP
        </button>
      </div>
      { isLogin?  <LoginForm setIsLoggedIn/>  :  <SignUp/>}
    </div>
  );
};

export default Authapp;
