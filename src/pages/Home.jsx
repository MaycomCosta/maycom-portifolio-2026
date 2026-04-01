import React from "react";
import { Hero, Marquee, About, Projects, Skills, Contact } from "../components";

const Home = ({ t }) => (
  <main>
    <Hero t={t} />
    <Marquee text={t("marquee.text")} />
    <About t={t} />
    <Projects t={t} />
    <Skills t={t} />
    <Contact t={t} />
  </main>
);

export default Home;
