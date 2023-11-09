/* eslint-disable no-shadow */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import PrimaryButton from "../../Buttons/PrimaryButton";

function LogInSection() {
  const router = useRouter();
  const [email, setEmail] = useState("123@123");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(false);

    try {
      // Simulate authentication check
      if (email === "123@123" && password === "123") {
        // Successful login, redirect to home
        router.push("/");
      } else {
        // Unsuccessful login, display error
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="relative">
      <div className="mb-[8.75rem] pt-[3.75rem] lg:mt-[3.75rem] lg:pt-0">
        <div className="hidden w-[calc(805/1440*100vw)] lg:block">
          <Image
            className="left-0 h-full w-full"
            src="/SideImage/SideImage.png"
            width={805}
            height={706}
            alt="Picture of the side image"
            priority
          />
        </div>
        <div className="container grid justify-center py-0 lg:absolute lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:grid-cols-2">
          <div className="ml-auto flex lg:col-span-1 lg:col-start-2 lg:flex-col">
            <form onSubmit={handleLogin} className="max-w-[23.125rem]">
              <div className="mb-6 text-4xl font-medium leading-[1.875rem]">
                Log in to Exclusive
              </div>
              <div className="mb-12">Enter your details below</div>
              <div className="flex-col">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  autoComplete="password"
                  placeholder="Password"
                  className="mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                {!loading && <PrimaryButton type="submit" label="Log In" />}
                {loading && (
                  <button
                    type="submit"
                    className="flex h-[56px] w-[143px] items-center justify-center rounded bg-button-2 font-medium text-white transition-all hover:bg-hover-button-0"
                  >
                    <Image
                      src="/Loading.svg"
                      alt="Loading"
                      width={40}
                      height={40}
                    />
                  </button>
                )}
                <div className="cursor-pointer text-button-2">
                  Forget Password?
                </div>
              </div>
              {error && <div className="mt-4 text-red-500">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSection;
