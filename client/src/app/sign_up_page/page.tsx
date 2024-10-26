"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import "../globals.css";

export default function SignUpPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // FIXME
      const response = await fetch('your-backend-url/api/signup', {//FIXME
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Handle successful signup (e.g., redirect to login)
      
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <main>
      <div className= "background-div-style">
        <div className= "link-div-style">
            <Link href= "/">
              <button className = "orange-round-button">Home</button>
            </Link>
        </div>
        <div className= "flex flex-col align-middle bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className= "text-center text-2xl font-bold mb-6">
            Sign up for CollabraGator
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username field */}
            <div>
              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters"
                  }
                })}
                id = "username"
                type= "text"
                placeholder= "User Name"
                className= "w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
              {errors.username && (
                <p className= "text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            {/* Email field */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                id= "email"
                type= "email"
                placeholder= "Email"
                className= "w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
              {errors.email && (
                <p className= "text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password field */}
            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                id= "password"
                type= "password"
                placeholder= "Password"
                className= "w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit button */}
            <div>
              <button
                type= "submit"
                className= "w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}