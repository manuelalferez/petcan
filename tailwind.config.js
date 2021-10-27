module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://ik.imagekit.io/manuelalferez/petcan/hero_SEODQePZeg8.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
