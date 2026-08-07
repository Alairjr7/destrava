import { About } from "./components/landing/About";
import { Benefits } from "./components/landing/Benefits";
import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { HowItWorks } from "./components/landing/HowItWorks";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <About />
      </main>
    </>
  );
}
