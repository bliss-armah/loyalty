"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <Button onClick={() => signIn("google")} className="w-full mb-2 bg-transparent border border-[#24272F] text-[#24272F] hover:bg-transparent ">
      Sign In with Google
    </Button>
  );
};

export default SigninButton;
