/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "adieu-black": ["Adieu Black"],
        "adieu-light": ["Adieu Light"],
        "adieu-regular": ["Adieu Regular"],
        albertSansRegular: ["Albert-Sans-Regular"],
        albertSansMedium: ["Albert Sans Medium"],
        albertSansLight: ["Albert Sans Light"],
      },

      backgroundImage: {
        "gradient-to-45":
          "linear-gradient(45deg, rgba(255,255,255,0.1), #000000)",
      },

      gradientColorStops: (theme) => ({
        30: "30%",
        100: "100%",
      }),
    },
  },
  plugins: [],
};
