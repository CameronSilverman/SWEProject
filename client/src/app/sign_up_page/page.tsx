"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import "../globals.css";

export default function SignUpPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div className="background-div-style">
        <div className="link-div-style">
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
        <div className="flex flex-col align-middle bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold mb-6">
            Sign up for CollabraGator
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username field */}
            <div>
              <input
                {...register("username")}
                type="text"
                placeholder="User Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
            </div>

            {/* Email field */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
            </div>

            {/* Password field */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}