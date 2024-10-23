import React from "react";
import { useForm } from "react-hook-form";


const LoginForm = (props) => {

   
  const { register, handleSubmit ,formState:{errors} ,data} = useForm();

  function onsubmit(data){
    console.log("submitiing dataaa" , data)
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
       <div className="bg-blue-500 px-4 py-4 rounded-md flex flex-col gap-3 mx-auto mt-3">
      
      <input
        
        className={errors.username?"bg-slate-700 border border-red-600 border-solid rounded-md px-2 py-2" :"bg-slate-700 rounded-md px-2 py-2" }
        placeholder="Username"
        {...register("username", { required: true ,minLength: {value:3,message:"Minimum characters must be 3"}, maxLength: {value:10,message:"Max characters must be 10"}})}
      />
      {errors.username&&<p className="text-red-500 italic font-bold">{errors.username.message}</p>}

      <input
        type="password"
        className={errors.username?"bg-slate-700 border border-red-600 border-solid rounded-md px-2 py-2" :"bg-slate-700 rounded-md px-2 py-2" }
        placeholder="Password"
        {...register("Password", { required: true ,minLength: {value:3,message:" must be atleast 3"}, maxLength: {value:10,message:"Max characters must be 10"}})}
      />
      {errors.Password&&<p className="text-red-500 italic font-bold">{errors.Password.message}</p>}
      
      <button   className="bg-black text-white w-4/12 mx-auto rounded-md py-1">
        Login
      </button>
      <p>Forgot Password?</p>
      <p>
        Don't have an account? <a href="#">Sign Up</a>
      </p>
    </div>
    </form>
   
  );
};

export default LoginForm;
