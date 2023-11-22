/* eslint-disable no-console */
import React, { useState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import useUserStore from "@/stores/userStore";

import "react-toastify/dist/ReactToastify.css";
import s from "./MyAccountSection.module.scss";

function MyAccountSection() {
  const userStore = useUserStore();
  const { user } = userStore;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [firstName, setFirstName] = useState(user.name.firstname);
  const [lastName, setLastName] = useState(user.name.lastname);
  const [address, setAddress] = useState(
    `${user.address.street}, ${user.address.city}`,
  );
  const [email, setEmail] = useState(user.email);

  const handleSaveChanges = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      address !== "" &&
      email !== "" &&
      emailPattern.test(email) &&
      currentPassword !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      toast.success("Changes saved successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");
    } else {
      toast.error("Please fill in all required fields correctly!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword !== "" && e.target.value !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== "" && e.target.value !== password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mb-[8.75rem] mt-[5.9375rem]">
      <div className="flex gap-3 py-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <span className="text-text-1">/</span>
        <span className="cursor-default text-black">My Account</span>
        <span className="ml-auto cursor-default">
          Welcome!{" "}
          <span className="capitalize text-secondary-2">
            {user.name.firstname} {user.name.lastname}
          </span>
        </span>
      </div>

      <div className="flex flex-col justify-center gap-x-[6.25rem] lg:flex-row">
        <div className="hidden w-fit lg:block">
          <div className="cursor-default py-4 font-semibold">
            Manage My Account
          </div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1">
            <Link href="/MyAccount" className={clsx(s.Active)}>
              My Profile
            </Link>
            <Link href="/AddressBook">Address Book</Link>
            <Link href="/PaymentOptions">My Payment Options</Link>
          </div>
          <Link href="/MyOrders" className="flex py-4 font-semibold">
            My Orders
          </Link>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1">
            <Link href="/Returns">My Returns</Link>
            <Link href="/Cancellations">My Cancellations</Link>
          </div>
          <div className="py-4 font-semibold">
            <Link href="/wishlist">My WishList</Link>
          </div>
        </div>
        <div className="">
          <div className="py-4 font-semibold lg:hidden">Manage My Account</div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className={clsx(s.Active, "cursor-pointer")}>My Profile</span>
          </div>
          <div
            className={clsx(
              s.Shadow,
              "my-4 w-full max-w-[870px] rounded lg:my-0",
            )}
          >
            <form
              className="px-5 py-5 lg:px-20 lg:py-10"
              onSubmit={handleSubmit}
            >
              <div className="pb-4 text-xl font-semibold text-secondary-2">
                Edit Your Profile
              </div>
              <div className="mb-6 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-[3.125rem] lg:gap-y-0">
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.name.firstname}
                      label="First Name"
                      type="text"
                      autocomplete=""
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="value: capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.name.lastname}
                      label="Last Name"
                      type="text"
                      autocomplete=""
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-[3.125rem] lg:gap-y-0">
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={user.email}
                      label="Email"
                      type="email"
                      autocomplete=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="lg:w-[20.625rem]">
                    <InputField
                      className="capitalize placeholder:capitalize placeholder:italic"
                      classNameLabel="mb-2"
                      placeholder={`${user.address.street}, ${user.address.city}`}
                      label="Address"
                      type="text"
                      autocomplete=""
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col gap-y-4">
                  {(password.length > 0 ||
                    currentPassword.length > 0 ||
                    confirmPassword.length > 0) && (
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute right-0 top-1"
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                  )}
                  <InputField
                    value={currentPassword}
                    classNameLabel="mb-2"
                    placeholder="Current Password"
                    label="Password Changes"
                    type={showPassword ? "text" : "password"}
                    autocomplete="current-password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <InputField
                    value={password}
                    onChange={handlePasswordChange}
                    classNameLabel="mb-2"
                    placeholder="New Password"
                    label=""
                    type={showPassword ? "text" : "password"}
                    autocomplete="new-password"
                  />
                  <InputField
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    classNameLabel="mb-2"
                    placeholder="Confirm New Passwod"
                    label=""
                    type={showPassword ? "text" : "password"}
                    autocomplete="new-password"
                  />
                  {!passwordsMatch && (
                    <div style={{ color: "red" }}>
                      New passwords don&apos;t match! Try Again!
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-8">
                <Link href="/" type="button" className="hover:text-secondary-2">
                  Cancel
                </Link>
                <span className="hidden md:block">
                  <PrimaryButton
                    onClick={handleSaveChanges}
                    type="submit"
                    label="Save Changes"
                  />
                </span>
                <span className="md:hidden">
                  <PrimaryButton
                    onClick={handleSaveChanges}
                    type="submit"
                    label="Save"
                  />
                </span>
              </div>
            </form>
          </div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className="cursor-pointer">Address Book</span>
            <span className="cursor-pointer">My Payment Options</span>
          </div>
          <div className="py-4 font-semibold lg:hidden">My Orders</div>
          <div className="ml-[2.1875rem] flex flex-col gap-y-2 text-text-1 lg:hidden">
            <span className="cursor-pointer">My Returns</span>
            <span className="cursor-pointer">My Cancellations</span>
          </div>
          <div className="py-4 font-semibold lg:hidden">
            <Link href="/wishlist">My WishList</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountSection;
