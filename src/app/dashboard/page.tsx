import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log("Auth Object : ");
  console.log(authObj);
  console.log("User Object : ");
  console.log(userObj);

  return (
    <>
      <h1>
        Read Session and User Data with the help of Auth and currentUser helper
        function
      </h1>
    </>
  );
}
