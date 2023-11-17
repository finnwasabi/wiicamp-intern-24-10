/* eslint-disable no-shadow */

"use client";

import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

import useAuthStore from "@/stores/authStore";
import useUserStore from "@/stores/userStore";

import PrimaryButton from "../../Buttons/PrimaryButton";

function LogInSection() {
  const router = useRouter();
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("m38rmF$");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const authStore = useAuthStore();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (user) {
        const userDataResponse = await axios.get(
          `https://fakestoreapi.com/users/${user.id}`,
        );
        const userData = userDataResponse.data;

        // Store user data using the user store
        const { setUser } = useUserStore.getState();
        setUser(userData);

        authStore.login();
        localStorage.setItem("token", true);
        router.push("/");
        setLoading(false);
        setSuccess(true);
      } else {
        setError("Invalid email or password!");
        setLoading(false);
        setInvalidInput(true);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setLoading(false);
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
                  className={`mb-10 w-full border-b-2 pb-2 focus:border-black focus:outline-none ${
                    invalidInput ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setError("");
                    setEmail(e.target.value);
                    setInvalidInput(false);
                  }}
                  required
                />
                <div className="relative mb-10">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="password"
                    placeholder="Password"
                    className={`w-full border-b-2 pb-2 focus:border-black focus:outline-none ${
                      invalidInput ? "border-red-500" : ""
                    }`}
                    value={password}
                    onChange={(e) => {
                      setError("");
                      setPassword(e.target.value);
                      setInvalidInput(false);
                    }}
                    required
                  />
                  {password.length > 0 && (
                    <button type="button" onClick={handleTogglePassword}>
                      {showPassword ? (
                        <Eye className="absolute right-0 top-1" />
                      ) : (
                        <EyeOff className="absolute right-0 top-1" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                {!loading && !success && (
                  <PrimaryButton type="submit" label="Log In" />
                )}
                {loading && !success && (
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
                {success && (
                  <button
                    type="submit"
                    className="flex h-[56px] w-[143px] items-center justify-center rounded bg-button-2 font-medium text-white transition-all hover:bg-hover-button-0"
                  >
                    <Image
                      src="/Success.gif"
                      alt="Success"
                      width={40}
                      height={40}
                    />
                  </button>
                )}
                <div className="cursor-pointer text-button-2">
                  Forget Password?
                </div>
              </div>
              {error && (
                <div className="mt-8 text-lg font-semibold text-red-500">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSection;
