import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/login");
  }
  
  const user = await currentUser();
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.firstName || 'User'}!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          You are now signed in to your Piracy Fighter account.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          This is your dashboard where you can manage your content protection tools.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Recent Scans</h3>
          <p className="text-gray-600 dark:text-gray-300">
            You haven't performed any scans yet. Upload a document to get started.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3">Account Status</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Your account is active. You have access to all features of the platform.
          </p>
        </div>
      </div>
    </div>
  );
} 