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
import CityDivorcePage from './components/cityPages/CityDivorcePage';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Router>                          {/* Router wraps EVERYTHING */}
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
<Route path="/divorce-lawyer-noida" element={<CityDivorcePage />} />
  <Route path="/divorce-lawyer-delhi" element={<CityDivorcePage />} />
  <Route path="/divorce-lawyer-gurgaon" element={<CityDivorcePage />} />
<Route path="/services/conjugal-Rights" element={<ConjugalRightsPage />} />
          <Route path="/services/contested-Divorce" element={<ContestedDivorce />} />
          <Route path="/services/maintanance-And-Alimony" element={<MaintenanceAlimonyPage />} />
          <Route path="/services/dowry" element={<DowryCasesPage />} />
          <Route path='/services/child-Custody' element={<ChildCustodyPage />} />
          <Route path='/services/cruelty' element={<CrueltyPage />} />
          <Route path='/services/judicial-Separation' element={<JudicialSeparationPage />} />
          <Route path='/services/child-Visitation' element={<ChildVisitationPage />} />
          <Route path='/services/annulment-Of-Marriage' element={<AnnulmentOfMarriagePage />} />
          <Route path='/services/mutual-Divorce' element={<MutualDivorcePage />} />
          <Route path='/why-Unsaathi' element={<DivorceServicesPage />} />
          <Route path='/how-Unsaathi' element={<HowUnsaathiWorksPage />} />
          <Route path='/blogs' element={<BlogPostPage />} />
          <Route path="/blogs/:id" element={<BlogCard />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/quiz' element={<DivorceInsightQuiz />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/connect-With-Us' element={<ConnectWithUnsaathi />} />
          <Route path="/blog-Detail-Page/:id" element={<BlogDetailPage />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          </Routes>
        <ChatBot />
        <Footer />                       
      </Router>
    </div>
  );
}

export default App;
