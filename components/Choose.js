import React from "react";
import styled from "styled-components";
import cl from "../public/images/choose.png";
import Image from "next/image";
import light from "../assets/images/streetlight.png"

export default function Choose() {
  const onButtonClick = () => {
    const pdfUrl = "profile.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   };
  return (
    <div id="about-us" >
    <div className="choose"  >
      {/* <div className="image" >
        <Image src={light} alt="choose" style={{  color: "transparent",height: "104vh",width:"700px"}} />
      </div> */}
      <div className="content" style={{marginLeft:"10%"}}>
        <h2 style={{color:"black",fontSize:"40px",}}>Throwing Some Light On Us</h2>
        {/* <p style={{fontSize:"15px",justifyContent:"center"}}>
        M/s. Jogin Electricals Belagavi Karnataka India is a leading contracting & manufacturing firm in electrical decorative lighting like pathway as well as median poles along with beautification of cities including UG cabling work, external, Internal, wiring for IT sectors, Hospitality, Corporate sector And HT, LT & Substation and outdoor lighting work in Karnataka, Goa, Orissa & West Bengal States since last 30 yrs. It has earned an excellent reputation over the years as being an effective, efficient and reliable contracting firm. Our core strengths are unparallel dedication towards our projects in terms of quality and time commitments. Our goal is to exceed the expectations of every client by offering quality execution of electrical Internal wiring for IT sectors, Hospitality, Corporate sector And HT & LT electrical assignments and other simultaneous activities like liasoning with local state electricity board & Government Electrical Inspectorate.
        </p> */}
        <p style={{fontSize:"15px",justifyContent:"center",fontFamily:"sans-serif"}}>
        Welcome to Jogin Electricals, a prominent contracting and manufacturing firm based in Belagavi, Karnataka, India, with a robust 31-year history. We specialize in electrical decorative lighting, focusing on pathway and median poles, as well as enhancing urban aesthetics. Our influence extends across Karnataka, Goa, Orissa, and West Bengal, where we've made significant contributions to transforming city landscapes.

Jogin Electricals offers a wide array of services, from UG cabling work to internal and external wiring for IT sectors, hospitality, corporate entities, and the implementation of HT, LT, and substation projects. Recognized for our commitment to excellence, efficiency, and reliability, we consistently exceed client expectations. Under the leadership of founder Mr. Laxman S. Jogin since 1992, we've successfully completed over 150 projects, covering decorative lighting, UG cabling, and electrical infrastructure.

Our clientele includes Local bodies, PWD, HESCOM, KSHIP, City Development authorities, KRIDL, NHAI, and key industrial players such as Aequs, Squad Forging, Quest Global, AAIPL, Ashoka, ACC Cements, among others. Beyond new projects, Jogin Electricals is your reliable partner for the redevelopment and maintenance of existing electrical installations. We take pride in facilitating seamless project execution and contributing to a brighter, electrifying future for all.
        </p>
        {/* <button style={{backgroundColor:"black",width:"50%",height:"50px",borderRadius:"20px"}} onClick={onButtonClick}>Download Brochure</button> */}
        {/* <a href="../public/profile.pdf" target="_blank" download style={{color:"black"}}>Link</a> */}
      </div>
    </div>
    <div style={{borderBottom:"3px solid black",marginTop:"-0.2%"}}>

    </div>
    </div>
  );
}

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: 0 9rem;
//   gap: 3rem;
//   margin-bottom: 5rem;
//   .image {
//   }
//   .content {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     gap: 3rem;
//     h2 {
//       font-size: 4rem;
//     }
//     p {
//       color: #7b7e86;
//       line-height: 2rem;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     margin: 2rem;
//     .image {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         height: 50vw;
//       }
//     }
//     .content {
//       gap: 1rem;
//       h2 {
//         font-size: 1rem;
//       }
//       p {
//         line-height: 1.3rem;
//         font-size: 0.9rem;
//       }
//     }
//   }
// `;