"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowLeft, Edit, UserCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (isLoaded && !isSignedIn) {
    redirect("/sign-in");
  }

  // Placeholder data - in a real app, you'd fetch this from your database
  const userIdeas = [
    {
      id: "1",
      title: "AI-Powered Code Reviewer",
      status: "Open",
      createdAt: "2023-09-15",
    },
    {
      id: "2",
      title: "Community Recipe Platform",
      status: "In Progress",
      createdAt: "2023-10-21",
    },
  ];

  const contributingIdeas = [
    {
      id: "3",
      title: "Remote Team Collaboration Tool",
      status: "In Progress",
      createdAt: "2023-11-03",
      role: "UI Designer",
    },
  ];

  if (!isLoaded) {
    return (
      <div className="container px-4 md:px-6 py-20 flex justify-center items-center min-h-[50vh]">
        <div className="loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-900/20 text-green-400 border-green-900/30";
      case "In Progress":
        return "bg-blue-900/20 text-blue-400 border-blue-900/30";
      case "Done":
        return "bg-purple-900/20 text-purple-400 border-purple-900/30";
      default:
        return "bg-gray-900/20 text-gray-400 border-gray-900/30";
    }
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-gray/20 bg-boulder/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={user?.imageUrl}
                    alt={user?.fullName || "User"}
                  />
                  <AvatarFallback className="text-orange bg-orange/10">
                    {user?.firstName?.charAt(0) ||
                      user?.username?.charAt(0) ||
                      "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl font-bebas tracking-wide text-white text-center">
                {user?.fullName || user?.username}
              </CardTitle>
              <CardDescription className="text-gray text-center">
                {user?.primaryEmailAddress?.emailAddress}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Link href="/user-profile">
                    <Button
                      variant="outline"
                      className="text-white border-gray/30 hover:bg-gray/10 hover:text-orange"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Manage Profile
                    </Button>
                  </Link>
                </div>
                <div className="pt-4 border-t border-gray/10">
                  <h3 className="text-sm font-medium text-white mb-2">
                    Account Info
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between text-gray">
                      <span>Member Since</span>
                      <span>
                        {new Date(
                          user?.createdAt || Date.now()
                        ).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="flex justify-between text-gray">
                      <span>Ideas Created</span>
                      <span>{userIdeas.length}</span>
                    </li>
                    <li className="flex justify-between text-gray">
                      <span>Contributing To</span>
                      <span>{contributingIdeas.length}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="ideas" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-boulder/50">
              <TabsTrigger
                value="ideas"
                className="data-[state=active]:bg-orange data-[state=active]:text-white"
              >
                My Ideas
              </TabsTrigger>
              <TabsTrigger
                value="contributions"
                className="data-[state=active]:bg-orange data-[state=active]:text-white"
              >
                My Contributions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ideas">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bebas tracking-wide text-white">
                    My Ideas
                  </h2>
                  <Link href="/submit">
                    <Button className="bg-orange text-white hover:bg-orange/80">
                      Create New Idea
                    </Button>
                  </Link>
                </div>

                {userIdeas.length > 0 ? (
                  <div className="space-y-4">
                    {userIdeas.map((idea) => (
                      <motion.div
                        key={idea.id}
                        whileHover={{ y: -5 }}
                        className="bg-boulder/50 border border-gray/20 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start">
                          <Link
                            href={`/ideas/${idea.id}`}
                            className="hover:text-orange"
                          >
                            <h3 className="text-xl font-bebas tracking-wide text-white mb-1">
                              {idea.title}
                            </h3>
                          </Link>
                          <Badge
                            className={`${getStatusColor(
                              idea.status
                            )} font-medium`}
                          >
                            {idea.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray">
                          Created on {idea.createdAt}
                        </p>
                        <div className="flex justify-end mt-2">
                          <Link href={`/ideas/${idea.id}`}>
                            <Button
                              variant="ghost"
                              className="text-orange hover:text-orange/80 hover:bg-gray/10"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-boulder/30 rounded-lg border border-gray/10">
                    <UserCircle className="h-12 w-12 text-gray mx-auto mb-4" />
                    <h3 className="text-xl font-bebas tracking-wide text-white mb-2">
                      No Ideas Yet
                    </h3>
                    <p className="text-gray mb-4">
                      You haven't created any ideas yet.
                    </p>
                    <Link href="/submit">
                      <Button className="bg-orange text-white hover:bg-orange/80">
                        Create Your First Idea
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="contributions">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bebas tracking-wide text-white">
                    My Contributions
                  </h2>
                  <Link href="/ideas">
                    <Button className="bg-orange text-white hover:bg-orange/80">
                      Find Ideas to Join
                    </Button>
                  </Link>
                </div>

                {contributingIdeas.length > 0 ? (
                  <div className="space-y-4">
                    {contributingIdeas.map((idea) => (
                      <motion.div
                        key={idea.id}
                        whileHover={{ y: -5 }}
                        className="bg-boulder/50 border border-gray/20 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start">
                          <Link
                            href={`/ideas/${idea.id}`}
                            className="hover:text-orange"
                          >
                            <h3 className="text-xl font-bebas tracking-wide text-white mb-1">
                              {idea.title}
                            </h3>
                          </Link>
                          <Badge
                            className={`${getStatusColor(
                              idea.status
                            )} font-medium`}
                          >
                            {idea.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray">
                            Joined on {idea.createdAt}
                          </p>
                          <Badge
                            variant="outline"
                            className="bg-orange/10 text-orange border-orange/30"
                          >
                            {idea.role}
                          </Badge>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Link href={`/ideas/${idea.id}`}>
                            <Button
                              variant="ghost"
                              className="text-orange hover:text-orange/80 hover:bg-gray/10"
                            >
                              View Project
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-boulder/30 rounded-lg border border-gray/10">
                    <UserCircle className="h-12 w-12 text-gray mx-auto mb-4" />
                    <h3 className="text-xl font-bebas tracking-wide text-white mb-2">
                      Not Contributing Yet
                    </h3>
                    <p className="text-gray mb-4">
                      You haven't joined any ideas as a contributor yet.
                    </p>
                    <Link href="/ideas">
                      <Button className="bg-orange text-white hover:bg-orange/80">
                        Browse Ideas to Join
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
