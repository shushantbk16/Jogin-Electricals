import React from 'react'
import demoimg from "../assets/images/streetlight.png"
import Image from 'next/image'
import { projectDetails } from "@/assets/data/dummydata"
import {motion} from "framer-motion"
 const Projectcard =({clientname,projectarray})=>{
  return(
  <div style={{textAlign:"center"}}>
  <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1, y:60 }
        }}
      >
  <div>
     <h4 style={{color:'black',fontSize:"2rem",marginTop:"2rem",marginBottom:"2rem"}}>
        {clientname}
      </h4>
  </div>
  </motion.div>
  
  
  <div  style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",textAlign:"center"}}>
  {
    projectarray.map( currentproject =>{
     return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 ,delay:0.8}}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1,y:60 },
        }}
      >
      <div className="marketplace" style={{width:"75%",height:"50vh",backgroundColor:"white",border:"1px solid black",borderRadius:"4px",marginBottom:"15%",marginLeft:"15%",}}>
    <div>
      <img src={currentproject.projectimg} width="50%" height="210px"/>
    </div>
    <div>
      <h4 style={{color:"black"}}>{currentproject.projecttitle}</h4>
      <p style={{color:"black",fontSize:"0.9rem"}}>{currentproject.projectdescription}</p>
    </div>
    
  </div>
  </motion.div>
     )
    }
    
    )
  }
  
  
 
  </div>
  
  </div>
  )
 }
const Projects = () => {
  return (
    <div >
    <div style={{height:"30vh",textAlign:"center",color:"black",fontSize:"30px",marginTop:"-5%",backgroundColor:"#0C0350"}}>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 1,y:60 },
        }}
      >
    <h2 style={{paddingTop:"10%",color:"whitesmoke"}}>Our Projects</h2>
    </motion.div>
    </div>
    <div >
    {
      projectDetails.map(project=>{
        return(
        <Projectcard clientname={project.client} projectarray={project.theirprojects}/>
        )
      })
    }
   
    </div>
    </div>
  )
}

export default Projects