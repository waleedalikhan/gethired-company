import React, { useState } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import Button from "@/components/Global/Button";
import ChatInitiaterSidebar from "@/components/Global/ChatInitiater/ChatInitiaterSidebar";

type Props = {
  classNames?: string;
};

const ChatInitiater: React.FC<Props> = ({ classNames }) => {
  let [openChatSidebar, setOpenChatSidebar] = useState<boolean>(false);

  const initiateChat = () => {
    setOpenChatSidebar((openChatSidebar = !openChatSidebar));
  };

  return (
    <>
      <GetHiredCard classNames={classNames}>
        <div className="flex flex-wrap w-full">
          <div className="md:w-2/3 w-full flex items-center mx-auto">
            <div className="w-1/2">
              <img src="/img/chat-initiater.png" alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="text-titles">Kelly</h1>
              <p className="text-xs text-secondary upprecase mb-2">
                gethired chat support
              </p>
              <p className="text-sm text-titles mb-2">kelly@gethired.ai</p>
              <p className="text-sm text-primary">+44 1632 960673</p>
            </div>
          </div>
          <div className="w-full">
            <Button
              text="+ Initiate Chat"
              onClick={initiateChat}
              classNames="bg-secondary-light2 text-primary"
            />
          </div>
          <div className="w-2/3 mx-auto text-center">
            <p className="text-secondary text-sm">
              (2){" "}
              <span className="font-sans">
                people in queue before you. Average wait time
              </span>{" "}
              less than 5 mins.
            </p>
          </div>
        </div>
        <ChatInitiaterSidebar
          isChatOpen={openChatSidebar}
          closeSidebar={initiateChat}
        />
      </GetHiredCard>
    </>
  );
};

export default ChatInitiater;
