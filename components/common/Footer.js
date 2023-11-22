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
        <div className="container footer">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Re.course.tech" caption="" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> 24 x 7 support
              </span>
              <br />
              <br />
              <h3>+91 8088062701</h3>
              <br />
              <button className="button-primary">Request for quote</button>
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
                <Link href="/">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/">E-Commerce</Link>
              </li>
            </ul>
            <ul>
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
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 RecourseTech. ALL RIGHTS RESERVED.</span>
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
