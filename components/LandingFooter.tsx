import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

interface LandingFooterProps {}

const LandingFooter: FC<LandingFooterProps> = ({}) => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-0">
        <h1 className="text-4xl font-extrabold">Cloudflurry.ai</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col xs:w-3-cols md:w-2-cols p-10">
            <h2 className="font-semibold pb-2 text-3xl">Research</h2>
            <Link
              href="/overview"
              className="hover:text-blue-300 transition duration-200"
            >
              Overview
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Index
            </Link>
          </div>
          <div className="flex flex-col xs:w-3-cols md:w-2-cols p-10">
            <h2 className="font-semibold pb-2 text-3xl">Product</h2>
            <Link
              href="/overview"
              className="hover:text-blue-300 transition duration-200"
            >
              Overview
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              About our Products
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Customer Stories
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Safety Standards
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              API Data Privacy
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Pricing
            </Link>
          </div>
          <div className="flex flex-col xs:w-3-cols md:w-2-cols p-10">
            <h2 className="font-semibold pb-2 text-3xl">Company</h2>
            <Link
              href="/overview"
              className="hover:text-blue-300 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Careers
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Charter
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Security
            </Link>
          </div>
          <div className="flex flex-col xs:w-3-cols md:w-2-cols p-10">
            <h2 className="font-semibold pb-2 text-3xl">Safety</h2>
            <Link
              href="/overview"
              className="hover:text-blue-300 transition duration-200"
            >
              Overview
            </Link>
            <Link
              href="/index"
              className="hover:text-blue-300 transition duration-200"
            >
              Index
            </Link>
          </div>
        </div>
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Cloudflurry Industries. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
