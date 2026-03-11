import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ForYou from './ForYou';
import UnsaathiSolutions from './Solutions';
import NewBeginning from './NewBegining';
import HassleFreeProcess from './HassleFreeProcess';
import ConnectWithUnsaathi from './connectWithUnsaathi';
import { Helmet } from 'react-helmet-async';


function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Helmet>
        <title>GSLO Unsaathi - Best Divorce Lawyers Delhi NCR</title>
        <meta name="description" content="Expert divorce lawyers in Delhi, Noida, Gurgaon. Mutual & contested divorces." />
      </Helmet>

      <Hero />
      <HassleFreeProcess/>
      <AboutUs/>
      <ForYou/>
      <UnsaathiSolutions/>
      <NewBeginning/>
      <ConnectWithUnsaathi/>
    </div>
  );
}

export default Home;
