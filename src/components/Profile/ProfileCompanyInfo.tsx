import React from "react";

const ProfileCompanyInfo: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap items-center border-b border-secondary-elements py-8">
          <div className="md:w-1/2 w-full md:mb-0 mb-3">
            <h1 className="text-secondary text-xss uppercase">company name</h1>
            <p className="text-titles text-1xl my-5">Pixel & Graphs</p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-secondary text-xss uppercase">size</h1>
            <p className="text-titles text-1xl my-5">26-50 employees</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCompanyInfo;
