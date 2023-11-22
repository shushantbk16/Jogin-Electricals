import React from "react";
import { Title, TitleLogo } from "./common/Title";
import Image from "next/image";
import client from "../public/images/client-solution3.png";
const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Unleash your potential with Software-tainly Exceptional solutions. Request a Qoute and Consultation" />
            <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          {/* <div>
            <button className="button-primary">Request a call-back</button>
          </div> */}
          <div className="client-image">
            <Image src={client} className="client-logo" alt="image" height="400px" width="400px"/>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Banner;
