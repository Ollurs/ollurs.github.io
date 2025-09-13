import React from "react"
import { TbFileCv } from "react-icons/tb";

const About= () => {
    return (
        <div className="text-white bg-[#5e5d5d] min-h-screen items-center flex sm:flex-row px-10 justify-between"id="about">
            <div className="max-w-[1200px] mx-auto sm:px-10  text-gray-300">
                <h2 style={{ color: "#f3f4f6", fontSize: "2.25rem", fontWeight: 700, paddingBottom: "2rem" }}>
                About
                </h2>
                <p className="items-center justify-center mb-4 text-xl md:text-2xl">
                    {process.env.REACT_APP_DESCRIPTION}
                </p>
                <p className="items-center justify-start text-xl md:text-2xl">
                More about my experience in my CV:
                </p>
                <div className="my-7 sm:justify-center md:justify-start flex flex-col gap-5 text-5xl text-primary sm:flex-row">
                <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={process.env.REACT_APP_CV_URL}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0.5rem",
                          border: "none",
                          padding: "0.5rem 1rem",
                          fontSize: "1.125rem",
                          background: "#8b5cf6",
                          color: "#fff",
                          fontWeight: 500,
                          textDecoration: "none",
                          transition: "transform 0.15s cubic-bezier(0.4,0,0.2,1)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <TbFileCv style={{ marginRight: "0.5rem", color: "#fff" }} /> CV
                    </a>
                </div>
            </div>
        </div>
    )
  }

export default About;