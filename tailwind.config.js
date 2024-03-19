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
    },
  },
  plugins: [],
};
