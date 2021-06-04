const opportunitiesData: object = {
  activeOpportunities: [
    {
      id: 1,
      isChecked: false,
      name: "Front-End Developer",
      applicantsApplied: 5,
      fieldOfOccupation: "Web, Mobile & Software Development",
      oppDuration: "25 days (remaining)",
      oppCreated: "14/08/2019",
      oppStatus: "Active",
    },
    {
      id: 2,
      isChecked: false,
      name: "Back-End Developer",
      applicantsApplied: 12,
      fieldOfOccupation: "Web, Mobile & Software Development",
      oppDuration: "25 days (remaining)",
      oppCreated: "14/08/2019",
      oppStatus: "Active",
    },
  ],
  draftOpportunities: [
    {
      id: 1,
      isChecked: false,
      name: "Junior Front-End Developer",
      applicantsApplied: "-",
      fieldOfOccupation: "Web, Mobile & Software Development",
      oppDuration: "-",
      oppCreated: "14/08/2019",
      oppStatus: "Draft",
    },
  ],
  closedOpportunities: [
    {
      id: 1,
      isChecked: false,
      name: "Full-stack Developer",
      applicantsApplied: "24",
      fieldOfOccupation: "Web, Mobile & Software Development",
      oppDuration: "Expired",
      oppCreated: "14/08/2019",
      oppStatus: "Closed",
    },
  ],
};

export default opportunitiesData;
