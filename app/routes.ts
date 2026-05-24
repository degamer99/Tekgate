// Old default code
// import { type RouteConfig, index } from "@react-router/dev/routes";
// export default [index("routes/home.tsx")] satisfies RouteConfig;

// app/routes.ts
// this controlls the routing of the entire site

import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Public Routes
  // the home page and logins are open to anyone to access
  index("routes/home.tsx"),
  route("sign-in", "routes/auth/signin.tsx"),
  route("sign-up", "routes/auth/signup.tsx"),

  // Protected Routes (Feed, Settings, Admin)
  // these pages need to be sign in either as user or admin
  layout("routes/layouts/auth-layout.tsx", [
    route("feed", "routes/feed.tsx"),
    route("settings", "routes/settings.tsx"),
  ]),

  // Nested Admin Layout (Sidebar, Stats Header)
  // special layer for only admins
  layout("routes/layouts/admin-layout.tsx", [
    route("admin", "routes/admin/dashboard.tsx"),
    route("admin/users", "routes/admin/users.tsx"),
  ]),
] satisfies RouteConfig;
