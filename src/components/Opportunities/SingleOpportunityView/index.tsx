import React from "react";
import Layout from "@/components/layouts/Layout";
import ViewOpportunityBoard from "@/components/Opportunities/SingleOpportunityView/ViewOpportunityBoard";

const SingleOpportunityView: React.FC = () => {
  return (
    <Layout title="Single Opportunity View | GetHired Company">
      <div className="pt-24 pb-16 min-h-screen bg-secondary-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-around items-start">
            <div className="lg:w-2/3 bg-white p-8 rounded-xl border border-secondary-elements">
              <ViewOpportunityBoard />
            </div>
            <div className="lg:w-1/4 bg-blue-500">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOpportunityView;
