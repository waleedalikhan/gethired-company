import React from "react";
import SingleOppRow from "@/components/Opportunities/SingleOpportunityDetails/SingleOppRow";
import SingleOppHeaderRow from "@/components/Opportunities/SingleOpportunityDetails/SingleOppHeaderRow";
import { connect } from "react-redux";
import { useRouter } from "next/router";

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
      acceptedApplicants: ApplicantInterface[];
    };
  };
}

type Props = {
  acceptedApplicants: ApplicantInterface[];
};

const AcceptedApplicants: React.FC<Props> = ({ acceptedApplicants }) => {
  const router = useRouter();

  const singleOppView = () => {
    router.push("/opportunities/single-opportunity-view");
  };

  const renderAppliedApplicants = acceptedApplicants.map(
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
            onClick={() => singleOppView()}
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
  acceptedApplicants: state.store.singleOppDetails.acceptedApplicants,
});

export default connect(mapStateToProps)(AcceptedApplicants);
