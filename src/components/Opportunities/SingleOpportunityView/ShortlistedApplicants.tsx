import React from "react";
import SingleOppRow from "@/components/Opportunities/SingleOpportunityView/SingleOppRow";
import SingleOppHeaderRow from "@/components/Opportunities/SingleOpportunityView/SingleOppHeaderRow";
import { connect } from "react-redux";

interface ApplicantInterface {
  id: string | number;
  applicantImg: string;
  isChecked: boolean;
  fullName: string;
  oppApplyingFor: string;
  match: string;
  dateApplied: string;
  remainingTime: string;
  status: string;
}

interface CPFromRedux {
  store: {
    singleOppDetails: {
      shortListedApplicants: ApplicantInterface[];
    };
  };
}

type Props = {
  shortListedApplicants: ApplicantInterface[];
};

const ShortlistedApplicants: React.FC<Props> = ({ shortListedApplicants }) => {
  const renderAppliedApplicants = shortListedApplicants.map(
    (applicant: ApplicantInterface) => {
      return (
        <div key={applicant.id} className="lg:mb-2 mb-6">
          <SingleOppRow
            isChecked={applicant.isChecked}
            applicantImg={applicant.applicantImg}
            fullName={applicant.fullName}
            oppApplyingFor={applicant.oppApplyingFor}
            match={applicant.match}
            dateApplied={applicant.dateApplied}
            remainingTime={applicant.remainingTime}
            status={applicant.status}
          />
        </div>
      );
    }
  );

  return (
    <>
      <div className="lg:block hidden">
        <SingleOppHeaderRow />
      </div>
      {renderAppliedApplicants}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  shortListedApplicants: state.store.singleOppDetails.shortListedApplicants,
});

export default connect(mapStateToProps)(ShortlistedApplicants);
