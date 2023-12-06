/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("/header.webp")',
        sakura: 'url("/sakura.webp")',
        ajisai: 'url("/ajisai.webp")',
      },
      colors: {
        discover: "#D49686",
        testimonials: "#e2c6b3",
        matsuri: "#A87257",
        hanami: "#cdd3c3",
        made: "#E2D6CB",
        about: "#CAB498",
        founders: "#ddd7ba",
        footer: "#F9F5F6",
        "link-hover": "#fff5bd",
        nav: "#DFCEBF",
        products: "#cac9a2",
        stockists: "#e2cdd0",
        team: "#dbddc9",
      },
    },
  },
  plugins: [],
};
