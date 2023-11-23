import React from "react";
import Image from "next/image";

function Splash() {
  return (
    <div className="splash-container">
      {/* Your splash image or loading animation */}
      <Image
        src="/splash-image.png"
        width={200}
        height={200}
        alt="Loading..."
      />
      {/* You can add a loading message if needed */}
      <p>Loading...</p>
    </div>
  );
}

export default Splash;
