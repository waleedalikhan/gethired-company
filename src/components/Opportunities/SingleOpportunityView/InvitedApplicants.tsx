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
      invitedApplicants: ApplicantInterface[];
    };
  };
}

type Props = {
  invitedApplicants: ApplicantInterface[];
};

const InvitedApplicants: React.FC<Props> = ({ invitedApplicants }) => {
  const renderAppliedApplicants = invitedApplicants.map(
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
  invitedApplicants: state.store.singleOppDetails.invitedApplicants,
});

export default connect(mapStateToProps)(InvitedApplicants);
