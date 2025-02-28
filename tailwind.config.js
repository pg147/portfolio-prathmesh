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
        signature: "BrotherSignature",
        code: ["Source Code Pro", "sans-serif"]
      },
      colors: {
        body: "#181818",
        primary: "#F64242",
        secondary: "#902727",
        headingGradientPrimary: "#FFFFFF",
        headingGradientSecondary: "#A1A1A1",
        links: "#808080",
        subheading: "#808080",
        textSecondary: "#F5F5F5",
        separatorGradient: "#737373",
        codeVariable: "#04D0F7",
        codeKeyword: "#B43BFF",
        codeObject: "#FF9704",
        codeTag: "#FF4F04",
        codeString: "#689F63",
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

