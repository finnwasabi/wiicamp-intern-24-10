import React, { useState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import InputField from "@/components/Buttons/InputField";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import s from "./ContactSection.module.scss";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success(`Message sent!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
    });
  };
  return (
    <div className="container mt-[5.9375rem]">
      <div className="flex gap-3 py-20">
        <Link href="/" className="text-text-1">
          Home
        </Link>
        <span className="text-text-1">/</span>
        <span className="cursor-default">Contact</span>
      </div>
      <div className="mb-[8.75rem] flex flex-col gap-y-[1.875rem] lg:flex-row lg:gap-x-[1.875rem]">
        <div
          className={clsx(
            s.ShadowBox,
            "round w-full px-[2.1875rem] py-10 lg:w-[21.25rem]",
          )}
        >
          <div className="flex flex-col border-b pb-8">
            <span className="mb-6 flex items-center text-lg font-semibold">
              <Image
                className="mr-4"
                src="/PhoneIcon.svg"
                width={40}
                height={40}
                alt="Icon of the phone"
              />
              Call To Us
            </span>
            <span className="mb-4 text-sm">
              We are available 24/7, 7 days a week.
            </span>
            <span className="text-sm">Phone: +8801611112222</span>
          </div>
          <div className="flex flex-col pt-8">
            <span className="mb-6 flex items-center text-lg font-semibold">
              <Image
                className="mr-4"
                src="/MailIcon.svg"
                width={40}
                height={40}
                alt="Icon of the mail"
              />
              Write To US
            </span>
            <span className="mb-4 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span className="mb-4 text-sm">Emails: customer@exclusive.com</span>
            <span className="text-sm">Emails: customer@exclusive.com</span>
          </div>
        </div>
        <div className={clsx(s.ShadowBox, "w-full px-10 py-8 lg:w-[50rem]")}>
          <form className="flex flex-col gap-y-8" onSubmit={handleOnSubmit}>
            <span className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
              <InputField
                classNameLabel=""
                autocomplete=""
                label=""
                placeholder="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                classNameLabel=""
                autocomplete=""
                label=""
                placeholder="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <InputField
                classNameLabel=""
                autocomplete=""
                label=""
                placeholder="Your Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </span>
            <textarea
              placeholder="Subject"
              className="min-h-[12.9375rem] rounded bg-secondary-0 px-4 py-4"
              required
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <div className="ml-auto w-fit">
              <PrimaryButton label="Send Message" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
