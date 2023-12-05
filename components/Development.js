import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import d1 from "../assets/images/d1.jpeg";
import d2 from "../assets/images/d2.jpeg"
import d3 from "../assets/images/d3.jpeg"
import d4 from "../assets/images/d4.jpeg"
import d5 from "../assets/images/d5.jpeg"
import d6 from "../assets/images/d6.jpeg"
const Development = () => {
  return (
    
    <div id="progress">
      <div className='heading-title-brand ' style={{paddingTop:"10%"}}>
            <h1 style={{color:"black",fontSize:"40px"}}>DEVELOPMENT PROCESS</h1>
          </div>
      <div class="cards" >
    <div class="card red">
        
        <Image src={d3} width={200} height={200} style={{borderRadius:"20px"}} />
        <p class="tip">Designing & Engineering</p>
       
    </div>
    <div class="card red">
        <Image src={d2} width={200} height={200} style={{borderRadius:"20px"}} />
        <p class="tip">Fabrication</p>
        
    </div>
    <div class="card red">
    <Image src={d1} width={200} height={200} style={{borderRadius:"20px"}} />
        <p class="tip">Hot dip Zinc galvanizing</p>
       
    </div>
    <div class="card red">
    <Image src={d4} width={200} height={200} style={{borderRadius:"20px"}} />
        <p class="tip">Polishing and Painting</p>
        
    </div>
    <div class="card red">
    <Image src={d5} width={200} height={200} style={{borderRadius:"20px"}} />
        <p class="tip">Quality Inspection </p>
       
    </div>
    <div class="card red">
    <Image src={d6} width={200} height={200} style={{borderRadius:"20px"}} alt="image"/>
        <p class="tip">Packaging & Shipping</p>
        
    </div>
</div>
       
     
    </div>
   
    
  
  
  );
};

export default Development;