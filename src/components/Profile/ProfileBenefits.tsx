import React, { useEffect, useState } from "react";

interface BenefitsInterface {
  id: string | number;
  benefit: string;
}

const ProfileBenefits: React.FC = () => {
  const [benefits, setBenefits] = useState<BenefitsInterface[]>([
    {
      id: 1,
      benefit:
        "Plan, structure and implement applications, websites, APIs, databases, etc.",
    },
    {
      id: 2,
      benefit: "Develop medium-sized and large web-based projects",
    },
    {
      id: 3,
      benefit:
        "Give your input and actively participate in various brainstormings",
    },
    {
      id: 4,
      benefit: "Maintain active applications",
    },
    {
      id: 5,
      benefit:
        "Define daily responsibilities and tasks with Project Managers and team members",
    },
    {
      id: 6,
      benefit: "Collaborate with the members of the Quality Assurance team",
    },
    {
      id: 7,
      benefit: "Work and experiment with the trending technologies",
    },
  ]);

  useEffect(() => {
    setBenefits(benefits);
  }, []);

  const renderBenefits = benefits.map((benefit: BenefitsInterface) => {
    return (
      <React.Fragment key={benefit.id}>
        <h1 className="text-secondary flex items-center mb-6">
          <span className="h-1 w-1 inline-block mr-2 rounded-full bg-primary"></span>
          <span className="font-sans mr-1">{benefit.benefit}</span>
        </h1>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements py-10">
          <div className="w-full mb-4">
            <h1 className="text-1xl text-titles">About</h1>
          </div>
          <div className="w-full mb-4">
            <div className="md:h-profile-height-desktop h-profile-height-mobile rounded-xl">
              <img
                src="/img/profile/profile-benefits.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <p className="font-sans text-secondary">
              To harness the power of innovation, SAP invests in the development
              of its diverse employees, We aspire to leverage the qualities and
              appreciate the unique competencies that each persone brings to the
              company.
            </p>
          </div>
          <div className="w-full">{renderBenefits}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileBenefits;
