import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex align-center justify-center py-8">
      <SignUp></SignUp>
    </div>
  );
}
