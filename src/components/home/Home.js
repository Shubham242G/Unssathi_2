import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ForYou from './ForYou';
import UnsaathiSolutions from './Solutions';
import NewBeginning from './NewBegining';
import HassleFreeProcess from './HassleFreeProcess';
import ConnectWithUnsaathi from './connectWithUnsaathi';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Hero />
      <HassleFreeProcess/>
      <AboutUs/>
      <ForYou/>
      <UnsaathiSolutions/>
      <NewBeginning/>
      <ConnectWithUnsaathi/>
      <Footer/>
    </div>
  );
}

export default Home;
