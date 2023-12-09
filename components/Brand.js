import React from "react"
import { Title } from "./common/Title"
import { brand, client2,client3 } from "@/assets/data/dummydata"
import styled from "styled-components";
const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='brand-container'>
          <div className='heading-title-brand ' style={{paddingTop:"20%"}}>
            <h1  className="company">WE ARE PROUD TO WORK WITH THESE COMPANIES</h1>
          </div>
          <div className='brand-content grid-6 py' style={{paddingTop:"2%"}}>
            {brand.map((item) => (
              <div className='client' key={item.id}>
                <img src={item.cover} alt={item.id} width='100px' height='100px' />
              </div>
            ))}
          </div>
          {/* <div className='brand-content grid-6 py' >
            {client2.map((item) => (
              <div className='client' key={item.id}>
                <img src={item.cover} alt={item.id} width='100px' height='100px' />
              </div>
            ))}
          </div>
          <div className='brand-content grid-6 py' >
            {client3.map((item) => (
              <div className='client' key={item.id}>
                <img src={item.cover} alt={item.id} width='100px' height='100px' />
              </div>
            ))}
          </div> */}
          
          {/* <div className="container">
            <div className="">
            {brand.map((item) => {
        return (
          <div className="" key={item.id}>
            <img src={item.cover} alt="client" width='100px' height='100px' />
          </div>
        );
      })}
   
            </div>    
          </div> */}
          
        </div>
      </section>
    </>
  )
}
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 5rem;
  background-color:black;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
export default Brand
