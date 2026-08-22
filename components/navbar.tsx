"use client";

import { MapIcon, MessagesSquare, Sparkle } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left Section: Logo & Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <Sparkle className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">FeedBack Fusion</span>
            </div>
          </Link>

          <Link
            href="/roadmap"
            className="flex items-center gap-1 text-sm hover:text-primary"
          >
            <MapIcon className="h-4 w-4" />
            Roadmap
          </Link>

          <Link
            href="/feedback"
            className="flex items-center gap-1 text-sm hover:text-primary"
          >
            <MessagesSquare className="h-4 w-4" />
            Feedback
          </Link>
        </div>

        {/* Right Section: Theme Toggle / Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Show when="signed-out">
            <SignInButton>
              <Button asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  );
}
