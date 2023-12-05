import React from 'react'
import {motion} from "framer-motion"
import { showcase4 ,showcase5} from '@/assets/data/dummydata'
const Gallery = () => {
  return (
    <div style={{textAlign:"center",color:"black",fontSize:"30px",marginTop:"-5%",backgroundColor:"#0C0350",marginBottom:"5%",paddingBottom:"3%"}}>
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
    <h2 style={{paddingTop:"10%",color:"whitesmoke",font:"menu",fontSize:"3rem",paddingBottom:"5%"}}>Decorative street light poles</h2>
    </motion.div>
    <div className="marketPlaces-portfolio ">
        {showcase4.map((item) => {
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
            <div className="marketplace-portfolio-gallery" style={{position:"relative",height:"37vh"}} id='gallery-image'>
              <div className="image-portfolio ">
                <img src={item.cover} alt="marketplace-portfolio "  style={{ width:"100%",height: "34vh"}}/>
              </div>
              {/* <div className="name-portfolio ">
                <h4 style={{fontSize:"15px"}}>{item.title}</h4>
               
              </div>
              <h1 className="text-decoration" style={{position:"absolute",color:"black",fontSize:"15px",justifyContent:"center",top:"26%",font:"menu"}}>{item.description}</h1> */}
              {/* <h6 className="username-portfolio ">{item.catgeory}</h6> */}
             
            </div>
           
            
            </motion.div>
          );
        })}
         </div>
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
    <h2 style={{color:"whitesmoke",font:"menu",fontSize:"3rem",paddingBottom:"5%"}}>Site Images</h2>
    </motion.div>
    <div className="marketPlaces-portfolio ">
        {showcase5.map((item) => {
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
            <div className="marketplace-portfolio-gallery" style={{position:"relative",height:"37vh"}} id='gallery-image'>
              <div className="image-portfolio ">
                <img src={item.cover} alt="marketplace-portfolio "  style={{ width:"100%",height: "34vh"}}/>
              </div>
              {/* <div className="name-portfolio ">
                <h4 style={{fontSize:"15px"}}>{item.title}</h4>
               
              </div>
              <h1 className="text-decoration" style={{position:"absolute",color:"black",fontSize:"15px",justifyContent:"center",top:"26%",font:"menu"}}>{item.description}</h1> */}
              {/* <h6 className="username-portfolio ">{item.catgeory}</h6> */}
             
            </div>
           
            
            </motion.div>
          );
        })}
         </div>
    
    </div>
  )
}

export default Gallery