import React, { useState, useEffect } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import Button from "@/components/Global/Button";

interface LatestOpptInterface {
  id: number;
  opportunityName: string;
  match: string;
  reviewTime: string;
}

const LatestTalent: React.FC = () => {
  let [oppts, setOppts] = useState<LatestOpptInterface[]>([
    {
      id: 1,
      opportunityName: "Front-End Developer",
      match: "95%",
      reviewTime: "16 hours",
    },
    {
      id: 2,
      opportunityName: "Front-End Developer",
      match: "85%",
      reviewTime: "1 day",
    },
    {
      id: 3,
      opportunityName: "Front-End Developer",
      match: "65%",
      reviewTime: "4 days",
    },
    {
      id: 4,
      opportunityName: "Back-End Developer",
      match: "55%",
      reviewTime: "28 days",
    },
    {
      id: 5,
      opportunityName: "Back-End Developer",
      match: "53%",
      reviewTime: "28 days",
    },
    {
      id: 6,
      opportunityName: "Back-End Developer",
      match: "53%",
      reviewTime: "28 days",
    },
  ]);

  useEffect(() => {
    setOppts(oppts);
  });

  const latestOppts = oppts.map((oppt: LatestOpptInterface) => {
    return (
      <React.Fragment key={oppt.id}>
        <div className="w-full flex items-center border-b border-secondary-elements py-4">
          <div className="w-1/2">
            <p className="text-sm text-titles">{oppt.opportunityName}</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-sm uppercase text-titles">{oppt.match}</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xs uppercase text-secondary">
              {oppt.reviewTime}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <GetHiredCard cardTitle="Latest Talents" classNames="pb-0 mb-6">
        <div className="w-full flex my-4">
          <div className="w-3/4 flex items-end">
            <h1 className="text-3xl text-primary -mb-2">12</h1>
            <div className="flex items-center ml-3">
              <img src="/img/icons/success-arrow.svg" alt="" className="mr-2" />
              <span className="text-xs text-secondary">
                11% growth of last 30 days
              </span>
            </div>
          </div>
          <div className="w-1/4 flex justify-end">
            <img src="/img/icons/group-user-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full flex mt-4">
          <div className="w-1/2">
            <p className="text-xss text-secondary uppercase">
              oppeortunity name
            </p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xss uppercase text-secondary">match%</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xss uppercase text-secondary">review time</p>
          </div>
        </div>
        {latestOppts}
        <div className="w-full -mb-4 -mt-6">
          <Button
            text="Show All Applicants"
            isTransparent
            classNames="text-primary mb-4"
          />
        </div>
      </GetHiredCard>
    </>
  );
};

export default LatestTalent;
