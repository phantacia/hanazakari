import Discover from "./discover/page";
import Header from "./header/page";
import Testimonials from "./testimonials/page";
import Hanami from "./hanami/page";
import Matsuri from "./matsuri/page";
import Made from "./made/page";
import Founders from "./founders/page";
import OurStory from "./ourstory/page";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="discover">
        <Discover />
      </section>
      <Testimonials />
      <div className="w-full min-h-screen bg-sakura bg-cover bg-center bg-no-repeat" />
      <Hanami />
      <Matsuri />
      <div className="w-full min-h-screen bg-ajisai bg-cover bg-center bg-no-repeat" />
      <section id="made">
        <Made />
      </section>
      <section id="ourstory">
        <OurStory />
      </section>
      <Founders />
    </main>
  );
}
