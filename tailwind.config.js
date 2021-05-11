module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2960ff",
        },
        titles: {
          DEFAULT: "#343843",
        },
        secondary: {
          DEFAULT: "#677389",
          purple: "#6842ff",
          red: "#ff427c",
          orange: "#ff6842",
          yellow: "#ffbd0f",
          green: "#31dfad",
          icon: "#c8cfe2",
          elements: "#efefef",
          light: "#f5f7ff",
          light2: "#edf2fd",
          light3: "#EAFCF7",
        },
        skills: {
          skill1: "#edf2fd",
          skill2: "#FFF8E7",
          skill3: "#FFF0EC",
          skill4: "#EAFCF7",
          skill5: "#EFEDFE"
        }
      },
      fontSize: {
        "1xl": "1.375rem",
        xss: "0.625rem",
      },
      height: {
        "1xl": "3.25rem",
        "3xl": "4.75rem",
        "18": "4.5rem",
        "90": "22.5rem",
        "profile-height-desktop": "435px",
        "profile-height-mobile": "219px"
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      width: {
        "notifications-dropdown": "420px",
        "18-width": "4.5rem",
        "52-width": "3.25rem",
        "card-width": "352px",
      },
      inset: {
        "17": "4.5rem",
      },
      boxShadow: {
        main: "0px 4px 30px rgba(0, 0, 0, 0.16)",
        light: "0px 25px 47px -21px rgba(0,0,0,0.52)",
      },
      margin: {
        "18": "4.5rem",
        "46": "-11.5rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
