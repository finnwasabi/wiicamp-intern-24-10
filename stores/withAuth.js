import React, { useEffect } from "react";
import { useRouter } from "next/router";

import useAuthStore from "@/stores/authStore";

const withAuth = (WrappedComponent) => {
  function AuthChecker(props) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        // Redirect to the /please page if the user is not authenticated
        router.push("/please");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      // You can customize the UI or show a loading state while checking authentication
      return (
        <div className="container flex flex-col items-center justify-center gap-x-2">
          Loading...
        </div>
      );
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  }

  // Forward the display name and any static methods
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";
    AuthChecker.displayName = `withAuth(${displayName})`;
  }

  return AuthChecker;
};

export default withAuth;
