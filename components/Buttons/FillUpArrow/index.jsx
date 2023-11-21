import { React, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function FillUpArrow() {
  const [isButtonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isOnTop = window.scrollY === 0;
      setButtonVisible(!isOnTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isButtonVisible && (
        <button
          type="button"
          className="fixed bottom-10 right-5 z-10 xl:bottom-5 xl:right-[5.625rem]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative mr-2 h-[2.875rem] w-[2.875rem] cursor-pointer rounded-full bg-secondary-0 shadow-xl hover:shadow-big">
            <ArrowUp className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </button>
      )}
    </div>
  );
}

export default FillUpArrow;
