// SUMMARY: Tailwind scans our files for classes and extends theme with fonts/colors.
/*
  import/export default: ESM syntax used by Vite.
  content: tells Tailwind where to look for class names to keep in the final CSS.
  theme.extend: we add custom colors + font families used in mock.
  plugins: none for now (we'll keep it simple to follow the spec).
*/
export default {
  /* content = globs Tailwind scans */
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  /* theme customization */
  theme: {
    extend: {
      /* Custom palette used by the mock */
      colors: {
        /* 'ink' = near-black text; 'lilac' = accent; 'wash' = light page bg */
        ink: "#0f0f15",
        lilac: "#c9a0ff",
        wash: "#eef1ff",
      },
      /* Two font stacks: headlines = Poppins; body = Inter */
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },

  /* No Tailwind plugins right now */
  plugins: [],
};
