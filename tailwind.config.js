module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif", "Europa,sans-serif"],
      body: ["Open Sans", "sans-serif", "Europa,sans-serif"],
    },
    extend: {
      fontSize: {
        13: "13px",
        lg: "clamp(1.25rem, calc(1.375rem + (1.75 - 1.25) * ((100vw - 40rem) / (64 - 40))), 1.75rem)",
        md: "clamp(1.1rem, calc(1.2rem + (1.2 - 1.1) * ((100vw - 40rem) / (64 - 40))), 1.2rem)",
        sm: "clamp(1rem, calc(1.05rem + (1.05 - 1) * ((100vw - 40rem) / (64 - 40))), 1.05rem)",
      },
      textColor: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        "light-gray": "#bebebe",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#bebebe",
        "dark-gray": "#151515",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
        "01": "0.4px",
        "05": "0.5px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      margin: {
        '5px': '5px',
        65: "6.5rem",
      },
      padding: {
        '5px': '5px',
        paddingMenu: "0 1.2vw",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        90: "160vh",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        65: "6.5rem",
      },
      backgroundSize: {
        24: "24px",
        16: "4rem",
      },
      height: {
        80: "80px",
        110: "110vh",
        90: "90vh",
      },
      minHeight: {
        590: "590px",
      },
      rotate: {
        270: "270deg",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        moon: "url('../public/images/moon.png')",
        moonDark: "url('../public/images/moonDark.png')",
        sun: "url('../public/images/sun.png')",
        sunDark: "url('../public/images/sunDark.png')",
        sky: "url('../public/images/beautiful-low-angle-shot-forest-blue-starry-night-sky.jpg')",
      },
    },
  },
  plugins: [],
};
