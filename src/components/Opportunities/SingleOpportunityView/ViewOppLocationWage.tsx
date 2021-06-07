import React from "react";

type Props = {
  location: string;
  salary: string;
};

const ViewOppLocationWage: React.FC<Props> = ({ location, salary }) => {
  return (
    <>
      <div className="flex items-start my-10 pb-10 border-secondary-elements border-b">
        <div className="w-1/2">
          <p className="text-xss text-secondary uppercase mb-3">
            opportunity office location
          </p>
          <h1 className="text-titles text-1xl">{location}</h1>
        </div>
        <div className="w-1/2">
          <p className="text-xss text-secondary uppercase mb-3">salary</p>
          <h1 className="text-titles text-1xl">{salary}</h1>
        </div>
      </div>
    </>
  );
};

export default ViewOppLocationWage;
