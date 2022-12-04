module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
        "01": "0.4px"
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
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
      },
      backgroundSize: {
        '24': '24px',
        '16': '4rem',
      },
      height: {
        80: "80px",
        110: "110vh",
        90: "90vh",
      },
      minHeight: {
        590: "590px",
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
