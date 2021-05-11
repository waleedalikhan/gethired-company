import React, { useState, useEffect } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import UnreadMessage from "@/components/Home/HomeComponents/UnreadMessage";
import Button from "@/components/Global/Button";

interface UnreadMessageInterface {
  id?: number | string;
  profile_img?: string;
  username?: string;
  deliveredTime?: string;
  unreadMsg?: string;
}

const UnreadMessagesCard: React.FC = () => {
  let [unreadMessages, setUnreadMessages] = useState<UnreadMessageInterface[]>([
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
  ]);

  useEffect(() => {
    setUnreadMessages(unreadMessages);
  }, []);

  const renderUnreadMessages = unreadMessages.map(
    (msg: UnreadMessageInterface) => {
      return (
        <React.Fragment key={msg.id}>
          <UnreadMessage
            profile_img={msg.profile_img}
            username={msg.username}
            deliveredTime={msg.deliveredTime}
            unreadMsg={msg.unreadMsg}
          />
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <GetHiredCard cardTitle="Unread Messages" classNames="mb-6">
        <div className="w-full flex my-4">
          <div className="w-4/5 flex items-end">
            <h1 className="text-3xl text-primary -mb-1 mr-3">6</h1>
            <div className="flex items-center ml-3">
              <span className="text-xs text-secondary">
                It takes 2-3 hours on average from Candidate to asnwer since
                Accept.
              </span>
            </div>
          </div>
          <div className="w-1/5 flex justify-end">
            <img src="/img/icons/message-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full">{renderUnreadMessages}</div>
        <div className="w-full -mb-1">
          <Button
            text="Show All Messages"
            isTransparent
            classNames="text-primary h-0 mt-3 -mb-6 p-0"
          />
        </div>
      </GetHiredCard>
    </>
  );
};

export default UnreadMessagesCard;
