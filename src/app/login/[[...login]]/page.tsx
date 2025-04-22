import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900/50 px-4">
      <div className="w-full max-w-md">
        <SignIn path="/login" routing="path" signUpUrl="/signup" />
      </div>
    </div>
  );
} 