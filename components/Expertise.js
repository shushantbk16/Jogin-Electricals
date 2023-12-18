import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import { motion } from "framer-motion";
import { showcase  } from "@/assets/data/dummydata";
import Link from 'next/link'
const Expertise = () => {
  return (
    <>
      <section className="expertise" >
        <div className="container" >
       
          <div className="heading-title"  style={{paddingTop:"10%",paddingBottom:"2%"}}>
          <div id="experTise" style={{height:"50px"}}></div>
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1 ,y:60 },
        }}
      >
      
        <Title title="Our expertise" />
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1 ,y:60 },
        }}
      >
            <p className="our-expertise" >
            Company undertakes following type of work: Contracting & Engineering from Designing to Project Execution for the following trade as Beautification of cities by providing UG cable system with decorative lighting, Electrical internal wiring, DG sets, Highway Electrification Data Networking, Structured cabling and Energy Management & Conservation.
            </p>
            </motion.div>
            
          </div>
          
          <div className="marketPlaces-portfolio ">
        {showcase.map((item) => {
          return (
            <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              // delay: "0.",
            }}
            style={{ top: "-22px" }}
            >
           <Link href={`/services#${item.id}`}>
            <div className="marketplace-portfolio" style={{position:"relative"}}>
              <div className="image-portfolio ">
                <img src={item.cover} alt="marketplace-portfolio "  style={{ width:"18rem",height: "30vh"}}/>
              </div>
              <div className="name-portfolio ">
                <h4 style={{fontSize:"0.9rem"}}>{item.title}</h4>
               
              </div>
              {/* <h1 className="text-decoration" style={{position:"absolute",color:"black",fontSize:"1.0rem",justifyContent:"center",top:"30%",font:"menu"}}>{item.description}</h1> */}
              {/* <h6 className="username-portfolio ">{item.catgeory}</h6> */}
             
            </div>
            </Link>
           
            
            </motion.div>
          );
        })}
         </div>
        
        </div>
      </section>
    </>
  );
};

export default Expertise;
