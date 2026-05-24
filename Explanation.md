# Author: Hafeez
---
# Decalration
Every word here is written by hand and can be each explained by me
---

# About
   if research gate and facebook had a baby, that would be tekgate, the name of the project web app/site we are building
  
# Pages
1. Sign in
2. Sign up
3. index page
4. Feed
5. Admin page
6. settings page

# Functions
1. *Auth*: sign up/in and admin
2. *DB*: Stores users info andd post info like likes, views
3. *Storage*: Stores the post, images, videos, files e.t.c

# Tech Stack
1. Appwrite: SAAS
2. Sentry: Error tracking

# Auth

# Todo
1. get all relevant extensions and linting 
2. `npm install clsx tailwind-merge`: help with tailwind
3. folder for all necessary accets like icons and images
4. Define the types, theme and fonts
6. decide if to use syncfusion ui lib or shadcn
7. Admin and feed layout: Sidebar, header and footer 
8. Import, export all components through a index.ts file at the root of the components folder except for shadcne.g
`export {default as NavItems } from "./NavItems"`

# Layout
## Header
```tsx
interface Props {
  title: string;
  description: string;
}

const Header = ({title, description}: Props) => {
  return(
    <header className="header">
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </header>   
  )
}

export default Header
```

```tsx
  const user = {name : "Admin"}
  <Header
    title={`Welcome ${user?.name ?? "Guest" }`}
    description="Manage users and data "
  />
```

## Sidebar
  Array for admin and feed: list title, route, useful info about the button that might help nav
### Admin
```json
[
  {
    "name": "dashboard",
    "route": "/admin/"
  },
  {
    "name": "Users",
    "route": "/admin/"
  },
  {
    "name": "Data",
    "route": "/admin/"
  }
]
```

## Footer

# Admin dashboard
```tsx
const dashboardStats = {
  totalUsers: 50,
  usersJoined: {currentMonth: 20, lastMonth: 30} // Prolly have a object of user with time stamp and gen this on demand
  totalPosts: 30
  postAdded: 0 // same for usersjoined
}

<section
className="flex flex-col gap-6"
>
  <--- style for mobile and desktop--->
  <div> 
    <StatsCard
      headerTitle="Total User" // try to get dynamically from object
      total={dashboardStats}
    />
  </div>
</section>
```

# Seo


# Questions
1. Should i use react with vite or nextjs: i want something minimal but powerful, i feel starting with react will be efficient but
may take time and more effort while nextjs will have batteries included but may not be as flexible or easy to do things not as intended
if need be, but at the end which will fit mor to the project
2. What ui librariels shadcn vs syncfusion to use and to the broader extent, what tech stack and libraries: there is a working version of the site. but i am
building this version for two reasons, one to pracitce as fast and efficient as possible to get my skills and understanding up to speed,
without the weight of the main current code, next is because i feel the current site is too bloated, many unnecesities i am still trying
to understand, like why not just use a sass or simpler architecture or code/folder structure e.t.c
