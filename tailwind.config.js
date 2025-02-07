/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: "Techno-Nue-Regular",
        medium: "Techno-Nue-Medium",
        semibold: "Techno-Nue-Semibold",
        bold: "Techno-Nue-Bold",
        signature: "BrotherSignature"
      },
      colors: {
        body: "#181818",
        primary: "#F64242",
        secondary: "#902727",
        headingGradientPrimary: "#808080",
        headingGradientSecondary: "#F5F5F5",
        links: "#808080",
        textSecondary: "#F5F5F5",
        separatorGradient: "#737373",
        tile: "#242424",
        stroke: "#393939",
        card: "#232323",
        blip: "#313131",
        form: "#1D1D1D"
      }
    },
  },
  plugins: [],
}

