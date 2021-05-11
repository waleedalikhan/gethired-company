import React from "react";

const ProfileAbout: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements py-10">
          <div className="w-full mb-4">
            <h1 className="text-1xl text-titles">About</h1>
          </div>
          <div className="w-full mb-4">
            <div className="md:h-profile-height-desktop h-profile-height-mobile rounded-xl">
              <img
                src="/img/profile/profile-about.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="font-sans text-secondary mb-6">
              One of our company goals has always been to create a workplace
              where developers can quickly grow their professional careers and
              use all of their skills to create innovative products, software,
              app, and websites. We've come really close because we aren't
              growing the team with 'lone wolves', but developers who want to
              learn soemthing new, who want to share knowledge with others and
              who are ready to jump into that problem-solving mode whenever they
              encounter any kind of challenge. And, of course, have fun while
              they're doing it!
            </p>
            <p className="font-sans text-secondary mb-6">
              Right now, we have 31 members in our Development department.
              That's 31 amazing minds who can look at a project from countless
              sides to find the right way to deliver the best result. And if
              their primary stack of PHP with Symfony, MySQL and JavaScript
              aren't enough to crack the issue, the'll learn a new language &
              use new tech - anything that'll make their job easier and
              themselves more proficient.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAbout;
