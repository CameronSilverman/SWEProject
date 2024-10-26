"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="background-div-style">
        <div className="link-div-style">
          
            <Link href="/sign_in_page">
              <button className = "bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Log In</button>
            </Link>
            <Link href="/project_creation">
              <button className = "bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-300 transition-colors">Project Creation Page</button>
            </Link>
          
            <Link href="/sign_up_page">
            <button className = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Signup</button>
            </Link>
          
        </div>
      </div>
    </main>
  );
}
