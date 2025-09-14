import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"
import profilepic from "../../../assets/profile.png"
import { TypeAnimation } from "react-type-animation"



const keywords = (process.env.REACT_APP_KEYWORDS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const longestKeyword = keywords.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ""
);

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
          <h3
            className={"text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"}
            style={{
              minHeight: longestKeyword.length > 20 ? '2.4em' : '1.3em',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <TypeAnimation
              sequence={keywords.flatMap((kw) => [kw, 1000])}
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
          <img className="w-[350px] sm:w-[300px] md:w-[350px] lg:w-[350px] xl:w-[450px] mx-auto h-auto rounded-full brightness-95" src={profilepic} alt="profile pic" />
        </div>
      </div>
    </div>
  )
}

export default Info