import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"
import profilepic from "../../../assets/profile.png"
import { TypeAnimation } from "react-type-animation"

const getRoleClass = (role) => {
  if (!role) return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
  if (role.length > 30) return "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl";
  if (role.length > 20) return "text-xl sm:text-2xl md:text-3xl lg:text-4xl";
  return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
};

const Info = () => {
  return (
    <div
      className="max-w-[1200px] min-h-screen mx-auto px-6 sm:px-6 flex items-center"
      id="home"
    >
      <div className="my-auto flex flex-col-reverse sm:flex-row justify-between w-full">
        <div className="ml-4 flex flex-col justify-center max-w-xl flex-1">
          <h2 className="title-large">
            Hi, I&apos;m {process.env.REACT_APP_NAME}
          </h2>
          <h3 className={getRoleClass(process.env.REACT_APP_KEYWORD1)}>
            <TypeAnimation
              sequence={[
                process.env.REACT_APP_KEYWORD1,
                1000,
                process.env.REACT_APP_KEYWORD2,
                1000,
                process.env.REACT_APP_KEYWORD3,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <div className="my-7 flex justify-start gap-5 text-3xl sm:text-3xl md:text-4xl text-accent">
            <a
              href={process.env.REACT_APP_GITHUB_URL}
              className="button-hover text-accent"
            >
              <AiFillGithub className="icon-primary" />
            </a>
            <a
              href={process.env.REACT_APP_LINKEDIN_URL}
              className="button-hover text-accent"
            >
              <AiFillLinkedin className="icon-primary" />
            </a>
            <a
              href={`mailto:${process.env.REACT_APP_EMAIL}`}
              className="button-hover text-accent"
            >
              <RiMailSendFill className="icon-primary" />
            </a>
          </div>
        </div>
        <div className="mb-8">
          <img className="w-[280px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[400px] mx-auto h-auto rounded-full brightness-95" src={profilepic} alt="profile pic" />
        </div>
      </div>
    </div>
  )
}

export default Info