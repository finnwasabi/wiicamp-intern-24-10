import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";

import useAuthStore from "@/stores/authStore";

const withGuest = (WrappedComponent) => {
  function GuestChecker(props) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return (
        <div className="container flex flex-col items-center justify-center gap-x-2">
          <CircularProgress color="black" size={25} />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  }

  return GuestChecker;
};

export default withGuest;
