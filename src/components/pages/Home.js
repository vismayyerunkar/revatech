import React,{useState} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';



function Home() {

  const [scrollToAbout,setScrollToAbout] = useState(false);

  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards scroll={scrollToAbout}/>
    </>
  );
}

export default Home;
