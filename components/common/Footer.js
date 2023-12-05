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
        <div className="container footer" id="foot" style={{marginLeft:"3%"}}>
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
              <p>joginele@gmail.com</p>
              <br />
              <p>KIADB Plot No. 7/B-II/2 B.K.Kangrali, Industrial Area Belagavi - 590010. KARNATAKA STATE (0831) 2489657</p>
              <br />
              {/* <button className="button-primary">Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About agency</Link>
              </li>

              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Electrical</Link>
              </li>
              <li>
                <Link href="/">Telecommunication</Link>
              </li>
              <li>
                <Link href="/">Computer Structure</Link>
              </li>
              {/* <li>
                <Link href="/">E-Commerce</Link>
              </li> */}
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
