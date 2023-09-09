"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { signOut, useSession } from "next-auth/react";
import Login from "../../login/Login";
import Link from "next/link";
import { Button } from "../button";
const ProfileButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link href={'/profile'} >Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                signOut();
              }}
            >
            <Button>Log out</Button> 
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Login />
      )}
    </>
  );
};

export default ProfileButton;
