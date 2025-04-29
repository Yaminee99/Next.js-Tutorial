"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   console.log("IsLoaded : " + isLoaded);
  //   console.log("userId : " + userId);
  //   console.log("Session Id " + sessionId);
  //   if (!isLoaded || !userId) {
  //     return null;
  //   }

  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  //   console.log("isLoaded : " + isLoaded);
  //   console.log("isSignedIn : " + isSignedIn);
  //   console.log("User ");
  //   console.log(user);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>Count : {count}</h1>
    </>
  );
}
