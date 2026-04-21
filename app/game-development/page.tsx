"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GameDevHero from "../components/game-dev/GameDevHero";
import GameCapabilities from "../components/game-dev/GameCapabilities";
import TechStackGame from "../components/game-dev/TechStackGame";
import DevProcess from "../components/game-dev/DevProcess";
import FeatureShowcase from "../components/game-dev/FeatureShowcase";
import GamePortfolio from "../components/game-dev/GamePortfolio";
import GameDevCTA from "../components/game-dev/GameDevCTA";

export default function GameDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white">
        <GameDevHero />
        <GameCapabilities />
        <TechStackGame />
        <DevProcess />
        <FeatureShowcase />
        <GamePortfolio />
        <GameDevCTA />
      </main>
      <Footer />
    </>
  );
}
