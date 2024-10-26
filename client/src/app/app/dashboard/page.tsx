"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function DashboardPage() {
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
            Sign in to CollabraGator
          </h2>
        </div>
      </div>
    </main>
  );
}