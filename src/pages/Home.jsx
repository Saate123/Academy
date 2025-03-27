import React from "react";
import StudentBoxes from "../components/StudentBoxes";
import AdmissionSlider from "../components/AdmissionSlider";
import FinancingTools from "../components/FinancingTools";
import Methodology from "../components/Methodology";
import OpenDoorsBanner from "../components/OpenDoorsBanner";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSelection";
import InternationalExperience from "../components/InternationalExperience";
import Accreditation from "../components/Accreditation";
import StudyProgram from "../components/StudyProgram";
import Curriculum from "../components/Curriculum";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Methodology />
      <Curriculum />
      <Accreditation />
      <InternationalExperience />
      <StudyProgram />
      <StatsSection />
      <StudentBoxes />
      <AdmissionSlider />
      <FinancingTools />
      <OpenDoorsBanner />
      <Footer />
    </div>
  );
}

export default Home;
