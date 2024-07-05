/** @type {import('tailwindcss').Config} */
module.exports = {
  //what files to track
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  safelist: [
    {
      pattern: /./, // This line ensures Tailwind processes all classes, including arbitrary ones
    },
  ],
};
