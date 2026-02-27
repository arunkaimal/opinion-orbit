import { Map, MessageSquare, Sparkle } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="border-b bg-background shadow-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Sparkle className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">OpInIoN OrBIt</span>
              </div>
            </Link>

            <Link
              href="/roadmap"
              className="text-sm flex items-center hover:text-primary gap-1"
            >
              <Map className="h-4 w-4" />
              Roadmap
            </Link>
            <Link
              href="/feedback"
              className="text-sm flex items-center hover:text-primary gap-1"
            >
              <MessageSquare className="h-4 w-4" />
              Feedback
            </Link>
          </div>
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
