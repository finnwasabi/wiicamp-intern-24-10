// withAuth.js
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import useAuthStore from "@/stores/authStore";

const withAuth = (WrappedComponent) => {
  function Wrapper(props) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const isInitApp = useAuthStore((state) => state.isInitApp);
    const router = useRouter();

    useEffect(() => {
      if (!isInitApp) return;

      if (!isAuthenticated) {
        router.push("/please"); // Redirect to '/please' if not authenticated
      }
    }, [isAuthenticated, isInitApp, router]);

    if (!isAuthenticated) {
      return null; // Render nothing if not authenticated
    }

    return <WrappedComponent {...props} />;
  }

  return Wrapper;
};

export default withAuth;
