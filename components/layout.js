import Hero from "./hero";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Skills from "../components/skills";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Hero />
      
      {children}
      <Skills />

      <Footer />
    </>
  );
}
