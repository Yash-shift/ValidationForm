import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log(" submitted signup form", data);
    // Handle form submission here.
  }

  return (
    <div className="flex flex-col gap-3 mt-3">
      <form
        className="flex flex-col mx-auto  gap-4"
        onSubmit={handleSubmit(onsubmit)}
      >
        <input
          className="bg-slate-700 rounded-md px-2 py-2"
          {...register("username", {
            required: true,
            minLength: { value: 3, message: "Minimum characters must be 3" },
            maxLength: { value: 10, message: "Max characters must be 10" },
          })}
        />
        {errors.username && (
          <p className="text-red-500 italic font-bold">
            {errors.username.message}
          </p>
        )}


        <input
          className={
            errors.email
              ? "bg-slate-700 border border-red-600 border-solid rounded-md px-2 py-2"
              : "bg-slate-700 rounded-md px-2 py-2"
          }
          type="email"
          placeholder="Email"
          {...register("email", { pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:"sahi se email dal de bhai"
          } })}
          
        />
        {errors.email&&<p className="text-red-500 italic font-bold">{errors.email.message}</p>}




        <input
          className={
            errors.username
              ? "bg-slate-700 border border-red-600 border-solid rounded-md px-2 py-2"
              : "bg-slate-700 rounded-md px-2 py-2"
          }
          placeholder="Password"
          {...register("Password", {
            required: true,
            minLength: { value: 3, message: " must be atleast 3" },
            maxLength: { value: 10, message: "Max characters must be 10" },
          })}
        />
        {errors.Password && (
          <p className="text-red-500 italic font-bold">
            {errors.Password.message}
          </p>
        )}
        <input type="submit" disabled={isSubmitting}  value={isSubmitting?"wait ":"SUbmit"}></input>
      </form>
      <p className="text-blue-700 text-sm">
        Already have an account?{" "}
        <a href="#" className="text-black">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;
