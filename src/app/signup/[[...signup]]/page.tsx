import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900/50 px-4">
      <div className="w-full max-w-md">
        <SignUp path="/signup" routing="path" signInUrl="/login" />
      </div>
    </div>
  );
} 