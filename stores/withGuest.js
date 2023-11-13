import React, { useEffect } from "react";
import { useRouter } from "next/router";

import useAuthStore from "@/stores/authStore";

const withGuest = (WrappedComponent) => {
  function GuestChecker(props) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        // Redirect authenticated users to the home page
        router.push("/");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      // You can customize the UI or show a loading state while checking authentication
      return (
        <div className="container flex flex-col items-center justify-center gap-x-2">
          Loading...
        </div>
      );
    }

    // If the user is not authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  }

  return GuestChecker;
};

export default withGuest;
