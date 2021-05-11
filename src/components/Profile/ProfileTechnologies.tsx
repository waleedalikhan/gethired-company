import React from "react";

const ProfileTechnologies: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements py-10">
          <div className="w-full mb-5">
            <h1 className="text-titles text-1xl">Technologies Used</h1>
          </div>
          <div className="w-full flex flex-wrap items-start">
            <div className="px-6 py-3 rounded-lg bg-skills-skill1 mr-4 mb-4">
              <p className="text-titles text-sm">HTML</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-skills-skill2 mr-4 mb-4">
              <p className="text-titles text-sm">CSS</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-skills-skill3 mr-4 mb-4">
              <p className="text-titles text-sm">Javascript: Angular</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-skills-skill4 mr-4 mb-4">
              <p className="text-titles text-sm">Javascript: Angular</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-skills-skill2 mr-4 mb-4">
              <p className="text-titles text-sm">Ruby</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-skills-skill5">
              <p className="text-titles text-sm">Javascript: Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTechnologies;
