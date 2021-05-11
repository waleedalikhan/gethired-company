import React from "react";

const ProfileSocialLinks: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 w-full mx-auto flex flex-wrap py-8">
          <div className="w-full mb-4">
            <h1 className="text-secondary uppercase text-xss">social media</h1>
          </div>
          <div className="w-full flex items-center mb-5">
            <div className="mr-5">
              <img src="/img/icons/website-icon.svg" alt="" />
            </div>
            <div>
              <h1 className="md:text-1xl text-titles">
                www.pixelsandgraphs.com
              </h1>
            </div>
          </div>
          <div className="w-full flex items-center mb-5">
            <div className="mr-5">
              <img src="/img/icons/linkedin-icon.svg" alt="" />
            </div>
            <div>
              <h1 className="md:text-1xl text-titles">@pixelsandgraphs</h1>
            </div>
          </div>
          <div className="w-full flex items-center mb-5">
            <div className="mr-5">
              <img src="/img/icons/facebook-icon.svg" alt="" />
            </div>
            <div>
              <h1 className="md:text-1xl text-titles">@pixelsandgraphs</h1>
            </div>
          </div>
          <div className="w-full flex items-center mb-5">
            <div className="mr-5">
              <img src="/img/icons/instagram-icon.svg" alt="" />
            </div>
            <div>
              <h1 className="md:text-1xl text-titles">@pixelsandgraphs</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSocialLinks;
