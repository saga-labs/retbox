// https://nextjs.org/docs/pages/building-your-application/routing/middleware#matching-paths
// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#protecting-pages-with-middleware

import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

// add subroutes to affect
// export const config = {
//   matcher: "/about/:path*",
// };
