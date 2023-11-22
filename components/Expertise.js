import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <Title title="Our expertise" />
            <p>
              Software is our playground, and expertise is our swingset. We're
              the digital wizards who make tech seem like child's play, one byte
              at a time.
            </p>
      </motion.div>
            
          </div>
          <div className="hero-content expe grid-4">
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
              delay: "0.5",
            }}
            style={{ top: "-22px" }}
            >
            <Card data={expertise[0]} key={expertise[0].id} caption="learn more" />
            </motion.div>

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
              delay: "0.7",
            }}
            style={{ top: "-22px" }}
            >
            <Card data={expertise[1]} key={expertise[1].id} caption="learn more" />
            </motion.div>

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
              delay: "0.9",
            }}
            style={{ top: "-22px" }}
            >
            <Card data={expertise[2]} key={expertise[2].id} caption="learn more" />
            </motion.div>

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
              delay: "1.1",
            }}
            style={{ top: "-22px" }}
            >
            <Card data={expertise[3]} key={expertise[3].id} caption="learn more" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
