import React from 'react'
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import bi from "@/assets/images/lightpole-image.jpg"
import Image from 'next/image'
import { Slide ,Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import wallpaper from "../assets/images/wallpaper.png"
import wallpaper2 from "../assets/images/wallpaper2.png"
import wallpaper3 from "../assets/images/wallpaper3.jpeg"
import {motion} from 'framer-motion'
// const spanStyle = {
//     padding: '20px',
//     color: '#000000', 
//   }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh'
  }
  
  const Disp1=()=>{
    return (
    
    <section className="hero" >
     {/* <Image src={wallpaper3} width={100} height={1000} style={{width:"100%",height:"90vh"}}/> */}

     <div className="container cont" style={{top:"-10%"}}>
     <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { y: 80, opacity: 0, scale: 1 },
            }}
            transition={{
              type: "spring",
              duration: "1.0",
              ease: "easeInOut",
              bounce:0.4,
              delay: "0.9",
            }}
            // style={{ top: "-22px" }}
            >
     
      <TitleLogo title="We Welcome You To" caption="" className="logobg" />
      </motion.div>

      <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { y: 80, opacity: 0, scale: 1 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              // ease: "easeInOut",
              ease: "easeInOut",
              bounce:0.4,
              delay: "1.2",
            }}
            // style={{ top: "-22px" }}
            >
     
      <h1 className="hero-title" style={{color:"wheat",fontSize:"6rem"}}>JOGIN ELECTRICALS</h1>
      </motion.div>

     
      <div className="sub-heading">
      <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { y: 80, opacity: 0, scale: 1 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              // ease: "easeInOut",
              ease: "easeInOut",
              bounce:0.4,
              delay: "1.4",
            }}
            // style={{ top: "-22px" }}
            >
        <TitleSm title="An ISO 9001:2015 certified company"/> 
        </motion.div>
        
      </div>
    </div> 
    
  </section>
    )
    
  }

  const Disp2=()=>{
    return (
    
    <section className="hero" >
     <Image src={wallpaper2} width={1400} height={1000} style={{width:"100%"}}/>
     <div className="container cont" style={{position:"absolute",top:"5%",left:"5%"}}>
      <TitleLogo title="We Welcome You To" caption="" className="logobg" />
      <h1 className="hero-title" style={{color:"white",fontSize:"90%"}}>Jogin Electricals</h1>

      <div className="sub-heading">
        <TitleSm title="A QUALITY COMMITMENT"/> 
        
      </div>
    </div> 
    
  </section>
    )
    
  }

  const Disp3=()=>{
    return (
    
    <section className="hero" >
     <Image src={wallpaper3} width={1400} height={1000} style={{width:"100%"}}/>
     <div className="container cont" style={{position:"absolute",top:"5%",left:"5%"}}>
      <TitleLogo title="We Welcome You To" caption="" className="logobg" />
      <h1 className="hero-title" style={{color:"black",fontSize:"90%"}}>JOGIN ELECTRICALS</h1>

      <div className="sub-heading">
        <TitleSm title="A QUALITY COMMITMENT"/> 
        
      </div>
    </div> 
    
  </section>
    )
    
  }
const slideImages = [
    {
      url: '../assets/images/d1.jpeg',
      caption:<Disp1/>
    },
    {
      url:  'https://images.unsplash.com/photo-1594028235752-10a0cb865c7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0cmVldCUyMGxpZ2h0fGVufDB8fDB8fHww',
      caption: <Disp2/>
    },
    {
      url:  "https://plus.unsplash.com/premium_photo-1661761340012-77d7bb990d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHN0cmVldCUyMGxpZ2h0fGVufDB8fDB8fHww",
      caption: <Disp3/>
      
    },
  ];
const Home = () => {
    

  return (
    <Disp1/>
  )
}

export default Home;




