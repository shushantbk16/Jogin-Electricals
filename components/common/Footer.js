import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer" id="foot" style={{marginLeft:"3%",}}>
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="JoginElectricals" caption="" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> 24 x 7 support
              </span>
              <br />
              <br />
              <h3>+91 9448000143</h3>
              <p>projects@joginelectricals.com</p>
            
              <br />
              <p>KIADB Plot No. 7/B-II/2 B.K.Kangrali, Industrial Area Belagavi - 590010. KARNATAKA STATE (0831) 2489657</p>
              <br />
              {/* <button className="button-primary">Request for quote</button> */}
              <a href="mailto:projects@joginelectricals.com"> <button className="contact-button" style={{    backgroundColor:"black"}}>Contact Us</button></a>
            </div>
            <ul className="footer-services">
              <h3>COMPANY</h3>
              <li>
                <Link href="/#about-us">About </Link>
              </li>

              <li>
                <Link href="/#foot">Contact</Link>
              </li>
            </ul>
            <ul style={{marginLeft:"10%"}} className="footer-services">
              <h3>SERVICES</h3>
              <li>
                <Link href="/#experTise">Manufacturing Decorative street Light Poles</Link>
              </li>
              <li>
                <Link href="/#experTise">Electrical supergrade licensed contractors</Link>
              </li>
              <li>
                <Link href="/#experTise">Designing of electrical projects</Link>
              </li>
              <li>
                <Link href="/#experTise">HT UG cable / LT UG cable</Link>
              </li>
              <li>
                <Link href="/#experTise">Transformer centres</Link>
              </li>
              <li>
                <Link href="/#experTise">DG Sets</Link>
              </li>
              <li>
                <Link href="/#experTise">Building Internal Wiring</Link>
              </li>
              <li>
                <Link href="/#experTise">Highway , Industrial and Layout Electrification</Link>
              </li>
              
            </ul>
            {/* <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul> */}
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 JoginElectricals. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span></span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
