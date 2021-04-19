import React from "react";
import Container from "./Container";
import aboutImage from "../icons/aboutImage.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { ReactComponent as NodeJs } from "../icons/nodejs-icon.svg";
import { ReactComponent as Figma } from "../icons/figma.svg";
import { ReactComponent as Github } from "../icons/github-octocat.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as Tailwind } from "../icons/tailwindcss-icon.svg";

export default function About() {
  return (
    <>
      <div className="bg-lightBlue-100 py-20">
        <Container>
          <div className="flex flex-col-reverse xl:flex-row justify-center xl:justify-between items-start xl:space-x-12 ">
            <div className="w-full xl:w-6/12 mt-10 xl:mt-0">
              <div className="h-96 xl:h-110 xl:w-100">
                <img
                  src={aboutImage}
                  className="w-full h-full inset-0 object-cover object-center rounded-3xl"
                  alt="imageAbout"
                />
              </div>
            </div>
            <div className="w-full xl:w-6/12 ">
              <h1 className="text-5xl leading-relaxed tracking-wide text-blueGray-900">
                About Me
              </h1>
              <p className="mt-5 leading-relaxed tracking-wide font-semibold text-blueGray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
              <p className="mt-3 leading-relaxed tracking-wide font-normal text-blueGray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mt-3 leading-relaxed tracking-wide font-normal text-blueGray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="tex-sm font-semibold text-blueGray-900 mt-3 leading-relaxed tracking-wide">
                My Social Media
              </p>
              <div className="flex space-x-2 xl:space-x-4 mt-3 items-center">
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <span className=" text-lightBlue-100 ">
                    <FacebookIcon />
                  </span>
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <span className=" text-lightBlue-100">
                    <TwitterIcon />
                  </span>
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <span className=" text-lightBlue-100">
                    <YouTubeIcon />
                  </span>
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <span className=" text-lightBlue-100">
                    <InstagramIcon />
                  </span>
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1 inline-flex">
                  <span className=" text-lightBlue-100">
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
              <p className="tex-sm font-semibold text-blueGray-900 mt-3 leading-relaxed tracking-wide">
                My Skill
              </p>
              <div className="flex space-x-2 mt-3 items-center">
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <NodeJs className="h-7 w-7" />
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <Figma className="h-7 w-7" />
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <ReactIcon className="h-7 w-7" />
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <Tailwind className="h-7 w-7" />
                </div>
                <div className="bg-blueGray-900 rounded-md px-3 xl:px-6 py-3 flex-1">
                  <Github className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
