/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      colors: {
        primary: {
          0: "#FFFFFF",
          1: "#363738",
          2: "#c1c0c1",
        },
        secondary: {
          0: "#F5F5F5",
          1: "#FEFAF1",
          2: "#DB4444",
        },
        background: {
          0: "#FFFFFF",
        },
        text: {
          0: "#FAFAFA",
          1: "#7D8184",
          2: "#000000",
        },
        button: {
          0: "#000000",
          1: "#00FF66",
          2: "#DB4444",
        },
        "hover-button": {
          0: "#E07575",
          1: "#A0BCE0",
        },
      },
      content: {
        googleIcon: 'url("/GoogleIcon.svg")',
        sendIcon: 'url("/SendIcon.svg")',
        cancelCircleIcon: 'url("/CancelCircleIcon.svg")',
      },
      boxShadow: {
        custom: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    function myFunction({ addComponents }) {
      const components = {
        ".container": {
          maxWidth: "100%",
          padding: "0.75rem",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1194px",
          },
        },
      };
      addComponents(components);
    },
  ],
};
