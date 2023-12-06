import { Lora } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title:
    "Hanazakari | Sparkling Sake Infused with Japanese Green Tea and Flowers",
  description:
    "Explore the artistry of Hanazakari, where tradition meets innovation in sparkling sake. Indulge in unique blends infused with Japanese green tea, sakura, and ajisai flowers. Elevate your festivities with our low-alcohol, effervescent creations.",
  keywords:
    "Hanazakari, Sparkling Sake, Japanese Green Tea, Sakura, Ajisai Flowers, Tradition, Innovation, Low-Alcohol Sake, Festive Beverages",
  author: "Hanazakari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={lora.className}>
        <Navbar />
        <div>{children}</div>
      </body>
      <Footer />
    </html>
  );
}
