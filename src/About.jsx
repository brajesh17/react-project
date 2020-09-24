import React from 'react';
import Common from "./Common";
import web from "../src/pic/tech.webp";

const About =()=>
{
  return(
    <>
    <Common 
    name="Welcome to About Page" 
    imgsrc={web} 
    visit="/contact" 
    btn="Contact Now"
    />
    </>
  )
}

export default About;
