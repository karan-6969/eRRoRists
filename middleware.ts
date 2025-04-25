import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/ideas",
    "/ideas/:id",
    "/about",
    "/sign-in",
    "/sign-up",
    "/api/webhooks(.*)",
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/api/public(.*)"],
});

export const config = {
  // Runs the middleware on all routes except for
  // static files and API routes that are public
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
