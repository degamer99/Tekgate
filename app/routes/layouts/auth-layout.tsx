// app/routes/layouts/auth-layout.tsx

import { redirect, Outlet } from "react-router";
import { account } from "../../lib/appwrite"; // Your Appwrite init file

export async function loader() {
  try {
    // Check if user is authenticated
    const user = await account.get();
    return { user };
  } catch (error) {
    // Not authenticated, kick them to login
    throw redirect("/sign-in");
  }
}

export default function AuthLayout() {
  return (
    <div className="flex h-screen flex-col">
      {/* You can add a global Navigation Bar here */}
      <main className="flex-1 overflow-y-auto">
        <Outlet /> {/* Renders the Feed, Settings, or Admin layout */}
      </main>
    </div>
  );
}
