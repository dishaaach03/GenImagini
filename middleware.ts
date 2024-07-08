import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/','/api/webhooks/clerk','/api/webhooks/stripe'],
  ignoredRoutes: ['/api/(.*)'], // Ignore all API routes except the webhook
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};