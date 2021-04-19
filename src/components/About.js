import React from "react";
import Container from "./Container";
import aboutImage from "../icons/aboutImage.jpeg";
import { ReactComponent as Icongithub } from "../icons/logo-github.svg";

export default function About() {
  return (
    <>
      <div className="bg-lightBlue-100 bg-opacity-25 py-20">
        <Container>
          <div className="flex justify-between items-center space-x-12 ">
            <div className="w-6/12">
              <div className="h-110 w-100">
                <img
                  src={aboutImage}
                  className="w-full h-full inset-0 object-cover object-center rounded-3xl"
                  alt="imageAbout"
                />
              </div>
            </div>
            <div className="w-6/12">
              <h1 className="text-5xl  tracking-wide text-blueGray-900">
                About Me
              </h1>
              <p className="mt-8 leading-relaxed tracking-wide font-semibold text-blueGray-900">
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
              <div className="flex space-x-4 mt-3 items-center">
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
              </div>
              <p className="tex-sm font-semibold text-blueGray-900 mt-3 leading-relaxed tracking-wide">
                My Skill
              </p>
              <div className="flex space-x-4 mt-3 items-center">
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
                <div className="bg-blueGray-900 rounded-md px-6 py-3 flex-1">
                  <Icongithub />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
