"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/logo.jpg"} alt="logo" width={200} height={110} />
        <span className="text-orange-600  font-bold text-xl"></span>
      </div>

      <div className="flex gap-3 items-center">
        {/* Always show the Dashboard button, regardless of sign-in state */}
        <Link href={"/dashboard"}>
          <Button variant="outline" className="rounded-full">
            Dashboard
          </Button>
        </Link>

        {/* Show the Get Started or User Button based on sign-in state */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;