"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="background-div-style">
        <div className="link-div-style">
          <div>
            <Link href="/project_creation">Project Creation Page</Link>
          </div>
          <div>
            <Link href="/sign_up_page">Signup Page</Link>
          </div>
          <div>
            <Link href="/sign_in_page">Log In</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
