import { expertise, skillset } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import { motion } from "framer-motion"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          {/* <div className='grid-2 py'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div> */}
          <div className="marketPlaces grid-2">
        {expertise.map((item) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={item.cover} alt="marketplace" height="300px" width="300px"/>
              </div>
              <div className="name">
                <h4>{item.title}</h4>
               
              </div>
              {/* <h6 className="username">{item.catgeory}</h6> */}
             
            </div>
          );
        })}
        
         </div>
         <div className="marketPlaces grid-2">
        {skillset.map((item) => {
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
              
            }}
            style={{ top: "-22px" }}
            >
            <div className="marketplace">
              <div className="image">
                <img src={item.cover} alt="marketplace" height="300px" width="300px"/>
              </div>
              <div className="name">
                <h4>{item.title}</h4>
               
              </div>
              {/* <h6 className="username">{item.catgeory}</h6> */}
             
            </div>
            </motion.div>
          );
        })}
        
         </div>
        </div>
      </section>
    </>
  )
}

export default Services
