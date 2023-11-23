import React from "react";
import Image from "next/image";

function Splash() {
  return (
    <div className="splash-container container flex h-screen items-center justify-center">
      <Image
        className="animate-bounce"
        src="/splash-image.png"
        width={150}
        height={150}
        alt="Loading..."
      />
    </div>
  );
}

export default Splash;
