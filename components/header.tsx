"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { name: "Join Us", path: "/join" },
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
          <Button className="bg-orange text-white hover:bg-orange/80">
            Sign In
          </Button>
          <Button className="bg-orange text-white hover:bg-orange/80">
            Sign Up
          </Button>
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
            <Button className="w-full justify-center bg-orange text-white hover:bg-orange/80">
              Sign In
            </Button>
            <Button className="w-full justify-center bg-orange hover:bg-orange/80">
              Sign Up
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
