import React from "react";
import cn from "classnames";

type Props = {
  isChatOpen: boolean;
  closeSidebar: () => void;
};

const ChatInitiaterSidebar: React.FC<Props> = ({
  isChatOpen,
  closeSidebar,
}) => {
  return (
    <>
      <div
        className={cn(
          "fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",
          {
            block: isChatOpen === true,
            hidden: isChatOpen === false,
          }
        )}
        style={{ marginTop: "73px", zIndex: 9999999999999999 }}
      ></div>
      <div
        className={cn(
          "h-screen bg-white cool-transition fixed top-0 bottom-0 md:w-1/3 w-full flex flex-wrap shadow-light pb-16",
          {
            "right-0": isChatOpen === true,
            "-right-full": isChatOpen === false,
          }
        )}
        style={{ zIndex: 9999999999999 }}
      >
        <div className="w-full flex items-center self-start border-b border-secondary-elements mx-5 py-6">
          <div className="w-1/2 flex items-center">
            <div className="w-1/3 bg-secondary-elements p-1 rounded-full">
              <img src="/img/chat-initiater.png" alt="" />
            </div>
            <div className="w-3/4 pl-1">
              <h1 className="text-3xl text-titles">Kelly</h1>
              <p className="text-xs text-secondary uppercase">
                gethired chat support
              </p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-transparent outline-none focus:outline-none">
              <img src="/img/icons/minimize-icon.svg" alt="" />
            </button>
            <button
              className="bg-transparent outline-none focus:outline-none ml-5"
              onClick={closeSidebar}
            >
              <img src="/img/icons/cross-circle-icon.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-wrap self-end pr-5 pl-8">
          {/* Recieved Message */}
          <div className="w-full flex flex-wrap bg-secondary-light2 px-6 rounded-r-4xl rounded-bl-4xl pb-2">
            <div className="w-16 -ml-12 -mt-10 p-2 bg-white rounded-full">
              <img src="/img/chat-initiater.png" alt="" />
            </div>
            <div className="w-full">
              <p className="text-titles font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                mattis nunc commodo pharetra vel elit. Elementum enim, mollis id
                dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem
                feugiat lacus et se?
              </p>
            </div>
          </div>
          {/* Recieved Message ends */}

          {/* Sent Message */}
          <div className="w-full flex flex-wrap bg-primary px-6 rounded-bl-4xl rounded-t-4xl py-4 my-6">
            <div className="w-full">
              <p className="text-white font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                mattis nunc commodo pharetra vel elit. Elementum enim, mollis id
                dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem
                feugiat lacus et se?
              </p>
            </div>
          </div>
          {/* Sent Message ends */}
        </div>

        <div className="flex bottom-0 fixed items-center z-50 h-16 bg-white lg:w-3/5 w-full">
          <button className="lg:px-6 lg:mx-0 mx-4 lg:w-auto w-7 bg-transparent outline-none focus:outline-none">
            <img
              src="/img/icons/clip-icon.svg"
              alt=""
              className="lg:w-auto w-full"
            />
          </button>
          <div className="w-full flex items-center h-full bg-secondary-light2 pl-6 lg:rounded-tl-3xl rounded-tl-2xl">
            <input
              type="text"
              className="w-4/5 h-full bg-transparent text-sm outline-none focus:outline-none text-secondary"
              placeholder="Start typing here..."
            />
            <button
              className="bg-transparent outline-none focus:outline-none w-full"
            >
              <img src="/img/icons/send-message-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInitiaterSidebar;
