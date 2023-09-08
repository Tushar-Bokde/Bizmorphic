"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <>
        <h1>{session.user.name?.split(' ')[0]}</h1>
        <button
          onClick={() => {
            signOut();
          }}
        >
          <img
            width={50}
            height={50}
            src={session.user.image || ""}
            alt="Image"
          />
          {"sign out"}
        </button>
      </>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
