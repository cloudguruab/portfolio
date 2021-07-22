import Hero from "./hero";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Resume from "../components/resume";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Hero />
      {children}
      <Experience />
      <Skills />
      <Resume/>
      <Footer />
    </>
  );
}
