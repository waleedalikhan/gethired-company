import React from "react";
import DisplayCard from "@/components/Global/DisplayCard";

const ProfileOpportunities: React.FC = () => {
  return (
    <>
      <div className="container mx-auto lg:px-5 px-4 mt-6 py-8">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements pb-10">
          <div className="w-full md:mb-4 mb-8">
            <h1 className="text-1xl">
              (<span className="text-primary">3</span>) Open Opportunities of
              Pixels & Graphs
            </h1>
          </div>
          <div className="w-full flex">
            <div className="w-cardWidth pr-4">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Front-End Developer"
                cardJobMatch="75% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
            <div className="w-cardWidth px-4">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Back-End Developer"
                cardJobMatch="40% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
            <div className="w-cardWidth pl-4">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Full-Stack Developer"
                cardJobMatch="31% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOpportunities;
