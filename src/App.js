import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter
import Navbar from './navbar/Navbar';
import Home from './components/home/Home';
import ConjugalRightsPage from './components/services/ConjugalRightsPage';
import ContestedDivorce from './components/services/ContestedDivorce';
import MaintenanceAlimonyPage from './components/services/MaintenanceAlimonyPage';
import DowryCasesPage from './components/services/DowryCasesPage';
import ChildCustodyPage from './components/services/ChildCustody';
import CrueltyPage from './components/services/Cruelty';
import JudicialSeparationPage from './components/services/JudicialSeperation';
import ChildVisitationPage from './components/services/ChildVisitationPage';
import AnnulmentOfMarriagePage from './components/services/AnnulmentOfMarriage';
import MutualDivorcePage from './components/services/MutualDivorcePage';
import DivorceServicesPage from './components/WhyUnsaathi.js/WhyUnsaathi';
import HowUnsaathiWorksPage from './components/HowUnsaathi/HowUnsaathi';
import BlogCard from './components/Blogs/Blogs';
import ContactUsPage from './contact/contact';
import BlogPostPage from './components/Blogs/BlogPostPage';
import ChatBot from './bot/bot';
import Footer from './components/home/Footer';
import DivorceInsightQuiz from './quiz/quiz';
import AboutUsPage from './components/AboutUs.js/AboutUs';
import ConnectWithUnsaathi from './components/home/connectWithUnsaathi';
import BlogDetailPage from './components/Blogs/BlogDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/conjugalRights" element={<ConjugalRightsPage />} />
          <Route path="/services/contestedDivorce" element={<ContestedDivorce />} />
          <Route path="/services/maintananceAndAlimony" element={<MaintenanceAlimonyPage />} />
          <Route path="/services/dowry" element={<DowryCasesPage />} />
          <Route path='/services/childCustody' element={<ChildCustodyPage />} />
          <Route path='/services/cruelty' element={<CrueltyPage />} />
          <Route path='/services/judicialSeparation' element={<JudicialSeparationPage />} />
          <Route path='/services/childVisitation' element={<ChildVisitationPage />} />
          <Route path='/services/annulmentOfMarriage' element={<AnnulmentOfMarriagePage />} />
          <Route path='/services/mutualDivorce' element={<MutualDivorcePage />} />
          <Route path='/whyUnsaathi' element={<DivorceServicesPage />} />
          <Route path='/howUnsaathi' element={<HowUnsaathiWorksPage />} />
          <Route path='/blogs' element={<BlogPostPage />} />
          <Route path="/blogs/:id" element={<BlogCard />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/quiz' element={<DivorceInsightQuiz />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/connect_With_Us' element={<ConnectWithUnsaathi />} />
          <Route path="/blogDetailPage/:id" element={<BlogDetailPage />} />
        </Routes>
      </Router>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
