"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
const Login = () => {
  return (
    <div>
      <Button 
        variant={'default'}
        onClick={() => {
          signIn();
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
