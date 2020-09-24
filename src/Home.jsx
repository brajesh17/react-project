import React from 'react';
import Common from "./Common";
import web from "../src/pic/tech.webp";


const Home =()=>
{
  return(
    <>
    <Common
      name="Grow your business with" 
      imgsrc={web} 
      visit="/service" 
      btn="Get Started"
    />
    </>
  )
}

export default Home;
