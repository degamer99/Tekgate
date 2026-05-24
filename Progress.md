# Done
1. init project and repo and pushed to github
2. in the github, remove *include in homepage* and add *topics, description and topics*
3. `pnpm install clsx tailwind-merge lucide-react appwrite zustand` `pnpm dlx shadcn@latest init`, 
4. pick radix for max support and batteries/accessibility,  pick nova, should be balance between combact and spaced, can be changed later
6. implemented routing and auth layout

# Todo
1. Setup appwrite
2. setup auth for sign up, sign in and sign out
3. make sure my store and zustand is ready for future 
4. create sign in, sign up and home pages.
5. server side rendering already by default, understand it more and how to tweak or custom where necessary for our project specific
6. For seo, add metadata for each page 
```tsx
// app/routes/feed.tsx
// i still need to understand this fully
import type { Route } from "./+types/feed";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: "Tekgate | The Research & Tech Feed" },
    { name: "description", content: "Discover the latest research, posts, and discussions on Tekgate." },
    
    // Open Graph / Facebook (From your Explanation.md: "if research gate and facebook had a baby")
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Tekgate | The Research & Tech Feed" },
    { property: "og:description", content: "Join the community of researchers and developers." },
    { property: "og:image", content: "https://yourdomain.com/og-feed-image.jpg" },
    
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Tekgate | The Research & Tech Feed" },
  ];
}

export default function Feed() {
  return (
    <section>
      <h1>Feed</h1>
      {/* Feed content */}
    </section>
  );
}
```




# Project Structure
| app/
  |-components/
    |-index.ts      // for handling all components imports and 
    |-ui/       // this is where shadcn stores its components
  |-assets/       // to store icons
  |-lib/      // for db, storage and maybe auth
  |-routes/   // in charge of custom routing and auth protection
    |-layouts/      // folder that stores all the layers for each section of page
      |-auth-layout.tsx     // makes sure only signed in user can access feed and other pages
      |-admin-layout.tsx    // protect admin route and wrapper for header, sidebar and footer
    |- signin.tsx     // page for signing in
    |- signup.tsx     // page for signing up
    |- home.tsx     // first page the user sees in the site 
  |-types/      // for all types
  |-store/      // for state management and zustand
