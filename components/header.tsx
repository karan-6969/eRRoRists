"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { LogOut, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ideas", path: "/ideas" },
    { name: "Submit", path: "/submit" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b border-gray/10 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-boulder/90 py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-xl md:text-2xl font-bebas tracking-wider text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ERROR<span className="text-orange">ISTS</span>
          </motion.span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors relative ${
                pathname === item.path
                  ? "text-orange"
                  : "text-white hover:text-orange"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <SignedOut>
            <Link href="/sign-in">
              <Button
                variant="outline"
                className="text-white border-gray hover:bg-gray/10 hover:text-orange"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-orange text-white hover:bg-orange/80">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/submit">
              <Button className="bg-orange text-white hover:bg-orange/80 mr-2">
                Post an Idea
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10",
                      userButtonTrigger:
                        "focus:shadow-none focus:outline-none focus-visible:ring-orange",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-boulder border-gray/20 text-white">
                <Link href="/profile">
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray/10 hover:text-orange">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 top-16 z-50 bg-boulder p-4 flex flex-col gap-4"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg font-medium p-2 hover:bg-gray/10 rounded-md ${
                pathname === item.path ? "text-orange" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <SignedOut>
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-center border-gray text-white hover:bg-gray/10"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center bg-orange hover:bg-orange/80">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center justify-between bg-gray/10 p-3 rounded-md mb-2">
                {user && (
                  <>
                    <div className="flex items-center gap-3">
                      <UserButton afterSignOutUrl="/" />
                      <div>
                        <p className="font-medium text-white">
                          {user.fullName || user.username}
                        </p>
                        <p className="text-sm text-gray">
                          {user.primaryEmailAddress?.emailAddress}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-center border-gray/30 text-white hover:bg-gray/10 mb-2"
                >
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </Link>
              <Link href="/submit" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center bg-orange hover:bg-orange/80 mb-2">
                  Post an Idea
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full justify-center border-gray/30 text-white hover:bg-red-900/20 hover:text-red-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  // The sign out functionality is handled by the UserButton component
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </SignedIn>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
