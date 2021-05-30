import * as t from "@/redux/types";

interface ActionsInterface {
  type: string;
  payload: any;
}

const main = (
  state = {
    firstName: "Waleed Ali",
    lastName: "Khan",
    latestTalents: [
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
    ],
    unreadMessages: [
      {
        id: 1,
        profile_img: "/img/unread-msg-profiles/profile_img1.png",
        username: "Jim Halpert",
        deliveredTime: "30min ago",
        unreadMsg:
          "Hello I was just wondering how we could handle this transfer from my part since that way it...",
      },
      {
        id: 2,
        profile_img: "/img/unread-msg-profiles/profile_img2.png",
        username: "Angela Martin",
        deliveredTime: "1h ago",
        unreadMsg:
          "The problem we are facing is beyond you and me. We need to understand that problem far deeper...",
      },
      {
        id: 3,
        profile_img: "/img/unread-msg-profiles/profile_img3.png",
        username: "Ryan Howard",
        deliveredTime: "2days ago",
        unreadMsg:
          "Thank you so much for everything, it was amazing interview. We will be definitly in touch in...",
      },
    ],
    chatInitiaterData: [
      {
        id: 1,
        sent: true,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?",
      },
      {
        id: 2,
        sent: false,
        msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?",
        profilePic: "/img/chat-initiater.png",
      },
    ],
    chatInitiaterHeaderInfo: {
      username: "Kelly",
      roll: "gethired chat support",
      userPic: "/img/chat-initiater.png",
    },
  },
  action: ActionsInterface
) => {
  switch (action.type) {
    case t.CHANGE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };

    case t.CHANE_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    default:
      return state;
  }
};

export default main;
