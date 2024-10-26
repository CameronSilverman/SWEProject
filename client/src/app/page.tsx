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
              <button className = "orange-round-button">Log In</button>
            </Link>
            <Link href="/project_creation">
              <button className = "white-round-button">Project Creation Page</button>
            </Link>
          
            <Link href="/sign_up_page">
            <button className = "blue-round-button">Signup</button>
            </Link>
          
        </div>
      </div>
    </main>
  );
}
