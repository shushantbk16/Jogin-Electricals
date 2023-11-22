
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/sections/Portfolio";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Choose from "@/components/Choose";
import Development from "@/components/Development";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="Re.course.tech" caption="" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <TitleSm title="WEB DEVELOPMENT"/> <span>.</span>
            <TitleSm title="APP DEVELOPMENT"/> <span>.</span>
            <TitleSm title="UI/UX DESIGN" />
          </div>
        </div>
        

      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="A comprehensive software hub catering to all your digital requirements" />
            <p>
              Our early achievements are a testament to our passion and
              innovation. With a growing list of satisfied clients, we've
              completed 50+ projects and counting. Our dedicated team of 15+
              experts is committed to fueling your company's digital journey.
            </p>
          </div>
          {/* <div className="hero-content skills grid-4">
            {home.map((item) => (
              <div className="box small-card" key={item.id}>
                <div className="left">
                <span className="icon">{item.icon}</span> 
                </div>
                <div >
                <h3 className="icon-description">{item.title}</h3>
                </div>
              </div>
            ))}
          </div> */}
          <div className="hero-content skills grid-4">
          <motion.div
          className="inline-block"
          initial={{opacity:0,x:-50}}
          whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
          viewport={{ once: true }}
         
        >
              <div className="box small-card left">
                <div >
                <AiOutlineCalendar size={200} /> 
                </div>
                <div >
                <h3 className="icon-description">Timely delivery of software projects Our early achievements are a testament to our passion and innovation. With a growing list of satisfied clients, we've completed 50+ projects and counting. Our dedicated team of 15+ experts is committed to fueling your company's digital journey.</h3>
                </div>
              </div>
          </motion.div>
          <motion.div
          className="inline-block"
          
          viewport={{ once: true }}
          initial={{opacity:0,x:50}}
          whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
        >
            <div className="box small-card right-term">
                <div >
                <TfiRulerPencil size={200} />
                </div>
                <div >
                <h3 className="icon-description">Unique technologies & modern approach Our early achievements are a testament to our passion and innovation. With a growing list of satisfied clients, we've completed 50+ projects and counting. Our dedicated team of 15+ experts is committed to fueling your company's digital journey.</h3>
                </div>
              </div>

        </motion.div>
        
        
        <motion.div
          className="inline-block"
         
          viewport={{ once: true }}
          initial={{opacity:0,x:-50}}
          whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
        >
            <div className="box small-card left">
                <div >
                <VscFileSubmodule size={200} />
                </div>
                <div >
                <h3 className="icon-description">100+ successful cases in portfolio Our early achievements are a testament to our passion and innovation. With a growing list of satisfied clients, we've completed 50+ projects and counting. Our dedicated team of 15+ experts is committed to fueling your company's digital journey.</h3>
                </div>
              </div>

        </motion.div>
             

        <motion.div
          className="inline-block"
          
          viewport={{ once: true }}
          initial={{opacity:0,x:50}}
          whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
        >
          <div className="box small-card right-term">
                <div >
                <BiUser size={200} /> 
                </div>
                <div >
                <h3 className="icon-description">Customer satisfaction is our top priority Our early achievements are a testament to our passion and innovation. With a growing list of satisfied clients, we've completed 50+ projects and counting. Our dedicated team of 15+ experts is committed to fueling your company's digital journey.</h3>
                </div>
              </div>


        </motion.div>
              
          </div>

        </div>
      </section>
      <Expertise />
      <Choose/>
      <Development/>
      <Brand/>
      <Banner/>
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
