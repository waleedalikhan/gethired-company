import React from "react";

const ProfileLocation: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap items-center border-b border-secondary-elements py-8">
          <div className="md:w-1/2 w-full md:mb-0 mb-3">
            <h1 className="text-secondary text-xss uppercase">location</h1>
            <p className="text-titles text-1xl my-5">United Kingdom, London</p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-secondary text-xss uppercase">work hour timezone</h1>
            <p className="text-titles text-1xl my-5">
              <span className="font-sans">From</span> GMT+2{" "}
              <span className="font-sans">to</span> GMT+8
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLocation;
