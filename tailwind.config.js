module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://ik.imagekit.io/gdgjaen/images/hero_0G13xgQ3u.png?updatedAt=1633596181450')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
