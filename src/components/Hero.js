import React from "react";
import Container from "./Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import image1 from "../icons/image1.jpeg";
import image2 from "../icons/image2.jpeg";
import image3 from "../icons/image3.jpeg";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-center space-x-0 xl:space-x-4 py-10 xl:py-20">
          <div className="w-full xl:w-6/12">
            <h1 className="text-7xl font-light leading-relaxed tracking-wide text-blueGray-500">
              Hello
            </h1>
            <h2 className="-mt-5 text-5xl font-light leading-relaxed tracking-wide text-blueGray-500">
              I'm,
              <span className="ml-3 leading-relaxed tracking-wide font-semibold text-blueGray-700">
                Edi Koswara
              </span>
            </h2>
            <p className="text-lg text-blueGray-500 mt-3 leading-relaxed tracking-wide">
              - Web Developer
            </p>
            <p className="mt-8 text-blueGray-400 leading-relaxed tracking-wide">
              I help our clients create brands, build digital products and
              services, innovate, find opportunities and validate ideas.
            </p>

            <button className="focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50 mt-10 rounded-md shadow-lg px-6 py-3 bg-lightBlue-900 text-lightBlue-100 font-semibold inline-flex items-center hover:bg-lightBlue-500 active:bg-lightBlue-500 border-none">
              Follow me on Gihub
              <span className="w-8 h-8 ml-2 text-lightBlue-100">
                <GitHubIcon />
              </span>
            </button>
          </div>
          <div className="w-full xl:w-6/12 mt-5 xl:mt-0">
            <div className="xl:p-2 p-0">
              <img
                className="rounded-lg object-cover object-center h-52 w-full"
                src={image1}
                alt="HeroImage"
              />
            </div>
            <div className="flex xl:p-2 py-4 xl:py-0 space-x-4">
              <div className="xl:w-6/12">
                <img
                  className="rounded-lg object-cover object-center h-36 w-full"
                  src={image2}
                  alt="HeroImage"
                />
              </div>
              <div className="xl:w-6/12">
                <img
                  className="rounded-lg object-cover object-center h-36 w-full"
                  src={image3}
                  alt="HeroImage"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
