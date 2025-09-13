import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      className="mx-auto flex h-screen max-w-[1100px] flex-col items-center justify-center"
      id="contact"
    >
      <div className="mx-8 my-auto flex flex-col">
        <p className="mb-4 text-5xl font-bold text-gray-600 md:text-7xl">
          Let&apos;s connect
        </p>
        <div className="my-7 flex flex-col justify-center gap-5 text-5xl text-primary sm:flex-row">
          <a
            href={process.env.REACT_APP_GITHUB_URL}
            className="button-hover flex items-center justify-center rounded-lg border vibrant-border px-4 py-2 text-lg vibrant-text"
          >
            <AiFillGithub className="mr-2 icon-primary" /> Github
          </a>
          <a
            href={process.env.REACT_APP_LINKEDIN_URL}
            className="button-hover flex items-center justify-center rounded-lg border vibrant-border px-4 py-2 text-lg vibrant-text"
          >
            <AiFillLinkedin className="mr-2 icon-primary" /> LinkedIn
          </a>
          <a
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
            className="button-hover flex items-center justify-center rounded-lg border vibrant-border px-4 py-2 text-lg vibrant-text"
          >
            <RiMailSendFill className="mr-2 icon-primary" /> Email
          </a>
        </div>
        <a
          href={`tel:${process.env.REACT_APP_PHONE}`}
          className="mt-6 text-center underline sm:no-underline hover:underline"
          style={{
            wordBreak: "break-all",
            color: "#8c15d1",
            fontSize: "1.3rem",
          }}
        >
          {process.env.REACT_APP_PHONE}
        </a>
      </div>
    </div>
  );
};

export default Contact;