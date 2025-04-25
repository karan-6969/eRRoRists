"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="container px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/"
          className="inline-flex items-center text-orange hover:text-orange/80 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </motion.div>

      <div className="max-w-md mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bebas tracking-wide text-white">
            Join Errorists
          </h1>
          <p className="text-gray mt-2">
            Create an account to collaborate and build ideas with others.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-boulder/50 p-6 rounded-lg border border-gray/20 shadow-sm backdrop-blur-sm">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary: "bg-orange hover:bg-orange/80 text-white",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-white",
                  headerSubtitle: "text-gray",
                  formFieldLabel: "text-white",
                  formFieldInput: "bg-boulder border-gray/30 text-white",
                  footerActionLink: "text-orange hover:text-orange/80",
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
