import React from "react";

type Props = {
  companyImgUrl: string;
  oppTitle: string;
  companyName: string;
  oppRemainingTime: string;
  fieldOfOccupation: string;
};

const ViewOppHeader: React.FC<Props> = ({
  companyImgUrl,
  oppTitle,
  companyName,
  oppRemainingTime,
  fieldOfOccupation,
}) => {
  return (
    <>
      <div className="flex items-center pb-10 mb-10 border-b border-secondary-elements">
        <div className="w-36 h-36 rounded-full border border-secondary-elements flex items-center justify-center">
          <img src={companyImgUrl} alt="" />
        </div>
        <div className="ml-8">
          <p className="text-titles text-3xl">{oppTitle}</p>
          <div className="flex items-center mt-4 mb-6">
            <p className="text-titles mr-4">{companyName}</p>
            <p className="text-secondary font-sans">{oppRemainingTime}</p>
          </div>
          <div className="flex items-center bg-secondary-light3 rounded-xl p-4">
            <div className="w-5 h-5 rounded-full bg-secondary-green -mt-px"></div>
            <p className="text-titles ml-4">{fieldOfOccupation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOppHeader;
