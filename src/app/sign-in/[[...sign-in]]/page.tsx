import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex align-center justify-center py-8">
      <SignIn></SignIn>
    </div>
  );
}
