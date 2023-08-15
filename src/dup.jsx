
import './App.css'
import { Link } from 'react-router-dom';
import User from "../Resources/images/user.svg";
// import Button from "../components/button";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { styled } from 'styled-components';
import { useState, useEffect } from "react";
import user1 from "../Resources/images//3.svg";
import user4 from "../Resources/images/3.svg";
import { FcConferenceCall } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FaAngleUp, FaSearchengin, FaTimes } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import { BsLink45Deg } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";
import $ from "jquery";
// import "owl.carousel/dist/assets/owl.carousel.css";
import CountUp from 'react-countup';
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Mixitup from "mixitup";
// import "owl.carousel";
import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Edit from "../Resources/images/edit ico.png";

import portfolio1 from "../Resources/images/portfolio1.jpg";
import portfolio2 from "../Resources/images/portfolio2.jpg";
import portfolio3 from "../Resources/images/portfolio3.jpg";
import portfolio4 from "../Resources/images/portfolio4.jpg";
import portfolio5 from "../Resources/images/portfolio5.jpg";
import portfolio6 from "../Resources/images/portfolio6.jpg";
// import Slick from "../components/Slick";
import User3 from "../Resources/images/review01.jpg";
import User4 from "../Resources/images/review02.jpg";
import User5 from "../Resources/images/review03.jpg";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const [isSticky, setIsSticky] = useState(false);
 


const [menuVisible, setMenuVisible] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setMenuVisible(window.innerWidth <= 991);
  };

  handleResize(); // Set initial value on page load
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsSticky(scroll >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Handleactive = (section) => {
    setActiveLink(section);
  };

  function debounce(func, delay) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  

 
  useEffect(() => {
    setActiveLink("main");
    const handleScroll = debounce(() => {
      const navbarHeight = 96;
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(section.id);
        }
      });
    }, 100); // Adjust the debounce time as needed

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



 

 

  const scrollToSection = (sectionName) => {
    const targetElement = document.getElementById(sectionName);
    const navbarHeight = 96;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      Handleactive(sectionName);
    }
  };
  
  const Handleblog = () => {
    scrollToSection("blog");
  };
  const scrollToTop =()=>{
    scrollToSection("main");
  }
  
  const HandleContact = () => {
    scrollToSection("contact");
  };
  const scrollToPortfolio = () => {
    scrollToSection("portfolio");
  };

  const ScrolltoResume = () => {
    scrollToSection("resume");
  };

  const ScrolltoServices = () => {
    scrollToSection("services");
  };
  const ScrolltoDiv = () => {
    scrollToSection("about");
 
  };

  
       Fancybox.bind('[data-fancybox="gallery"]', {
         //
       });

  useEffect(() => {
    // Initialize MixItUp
    const container = document.querySelector(".portF");
    Mixitup(container);

    // Handle filter click events
    const filterButtons = document.querySelectorAll(".portfolio-list ul li");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        Mixitup(container, { filter: filterValue });
      });
    });
  }, []);

$(window).on('scroll',function(){
    var a = $(window).scrollTop();
    if(a>400){
        $('.scroll-area').slideDown(300);
    }else{
        $('.scroll-area').slideUp(200);
    }
});


const [menuOpens, setMenuOpens] = useState(false);

const handleMenuToggle = () => {
  setMenuOpens(!menuOpens);

};
const Footer = styled.div`

.footer-widget-single h2 {
	font-size: 30px;
	font-weight: 900;
	margin-bottom: 10px;
	color: #fff;
}
.footer-widget-single p {
	color: #ccc;
}
.footer-widget-single h3 {
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
	position: relative;
	padding-bottom: 12px;
	margin-bottom: 10px;
}
.footer-widget-single h3::before {
	content: "";
	background: #94c045;
	width: 80px;
	overflow: hidden;
	height: 3px;
	position: absolute;
	bottom: 0;
	clear: both;
	display: block;
	z-index: 1;
}
.footer-widget-single h3::after {
	content: "";
	clear: both;
	display: block;
	overflow: hidden;
	background: #3c4133;
	width: 100%;
	height: 3px;
	bottom: 0;
	position: absolute;
	left: 0;
}
.footer-widget-single ul li {
	line-height: 32px;
}
.footer-widget-single ul li a {
	color: #ccc;
	text-transform: capitalize;
}
.footer-widget-single ul li a:hover {
	color: #fff;
}
.footer-widget-single strong {
	color: #fff;
}
.footer-widget-single ul.social-link {
	margin-top: 15px;
}
.footer-widget-single ul.social-link li {
	line-height: 20px;
	display: inline-block;
	margin: 3px;
}
.footer-widget-single ul.social-link li a {
	display: inline-block;
}
.footer-widget-single ul.social-link li a i {
	font-size: 14px;
	display: flex;
	background: #3c4133;
	color: #fff;
	line-height: 1;
	padding: 8px 0;
	border-radius: 50%;
	text-align: center;
	width: 36px;
	height: 36px;
	transition: 0.3s;
	justify-content: center;
	align-items: center;
}
.footer-widget-single ul.social-link li a i:hover {
	background: #ff66c4;
}
.footer-bottom p {
	font-size: 15px;
}
.footer-bottom p a{
	color: #ccc;
	font-weight: 700;
}
.footer-bottom p a:hover{
	color: #fff;
}

@media(max-width: 766px){
  .footer-widget-single h3::before {
	content: "";
	background: #94c045;
  max-width: 150px;
	width: 100px;
	overflow: hidden;
	height: 3px;
	position: absolute;
	bottom: 0;
	clear: both;
	display: block;
	z-index: 1;
}
.footer-widget-single h3::after {
	content: "";
	clear: both;
	display: block;
	overflow: hidden;
	background: #3c4133;
  max-width: 151%;
	width: 100%;
	height: 3px;
	bottom: 0;
	position: absolute;
	left: 0;
}
}
`

  return (
    <>
         <div className="bg-[#333333]" >
      {/*navbar*/}
     {/* <VideoPlayer /> */}
      <nav
        className={`lg:flex Laptopmin:flex items-center gap-5 justify-between bg-[#333333] py-[10px] Laptopmin:gap-[30px]  px-[30px] pr-10  left-0 w-full sticky top-0 z-10 Laptopminbg:gap-[40px] tabletmin:h-fit-content small:px-[25px] Laptopmin:px-[60px] ${
          isSticky
            ? " z-50  animate-sticky shadow-custom sticky bg-[#333333] h-auto"
            : ""
        } `}
      >
         
       
        {/* ${isMenuOpen ? 'open block' : 'hidden'} */}
        <figure
          onClick={() => {
            scrollToTop();
            Handleactive("main");
          }}
        >
          <img
            alt=""
            src={user1}
            className="h-[70px] w-auto pb-2 select-none cursor-pointer items-end Laptopmin:h-[65px] Laptopmin:mr-5  Laptopminbg:h-[70px]  tabletmin:bottom-[10px] tabletmin:hidden small:absolute small:left-[10px] tabletmin:h-[55px] "
          />
       
        </figure>
       
        <div>
     
          <ul className="flex gap-12 lg:gap-[40px] items-end text-[#e1d0d0] text-[15px] Laptopmin:text-[14px]  Laptopminbg:gap-[30px] tabletmin:hidden ">
            {/* Add Next.js Link to all the li elements */}
            <li
              onClick={() => {
                scrollToTop();
                Handleactive("main");
              }}
              className={`cursor-pointer  hover:text-[#ffff]  ${
                activeLink === "main" ? "text-[#ffff] cursor-pointer" : "text-[#e1d0d0]"
              }`}
              id="home"
            >
              HOME
            </li>
            <li
              onClick={() => {
                ScrolltoDiv();
                Handleactive("about");
              }}
              className={`cursor-pointer hover:text-[#ffff] ${
                activeLink === "about" ? "text-[#ffff] cursor-pointer" : "text-[#e1d0d0]"
              }`}
              id="bout"
            >
              ABOUT
            </li>
            <li
              onClick={ScrolltoServices}
              className={`cursor-pointer hover:text-[#ffff] ${
                activeLink === "services" ? "text-[#ffff]" : "text-[#e1d0d0]"
              }`}
              id="serve"
            >
              SERVICES
            </li>
            <li
              onClick={ScrolltoResume}
              className={`cursor-pointer hover:text-[#fff] ${
                activeLink === "resume" ? "text-[#ffff]" : "text-[#e1d0d0]"
              }`}
            >
              RESUME
            </li>
            <li
              onClick={scrollToPortfolio}
              className={`cursor-pointer hover:text-[#ffff] ${
                activeLink === "portfolio" ? "text-[#ffff]" : "text-[#e1d0d0]"
              }`}
            >
              PORTFOLIO
            </li>
            <li
              onClick={Handleblog}
              className={`cursor-pointer hover:text-[#ffff] ${
                activeLink === "blog" ? "text-[#ffff]" : "text-[#e1d0d0]"
              }`}
            >
              BLOG
            </li>
            <li 
            
            onClick={HandleContact}
            className={`cursor-pointer hover:text-[#ffff] ${
              activeLink === "contact" ? "text-[#ffff]" : "text-[#e1d0d0]"
            }`} >CONTACT</li>
          </ul>
         
          {menuVisible && 
         <>
        
         <div className="mobile-menu mean-container flex justify-between ">
         <img
            alt=""
            src={user4}
            className="h-[60px] w-auto  select-none cursor-pointer ml-[-30px] "
            onClick={() => {
              scrollToTop();
              Handleactive("main");
            }}
          />  

        <div className="mean-bar"><a  className={` meanmenu-reveal meanclose right-0 left-auto text-center text-indent-0 text-18`}  >
        <div className="open hidden tabletmin:block tabletmin:rounded-[1px] x border-[1px] border-white p-[10px] text-[white] text-[25px] cursor-pointer w-[fit-content]"   onClick={handleMenuToggle}>
          { menuOpens ?<FaTimes />   : <GiHamburgerMenu /> }
         
        </div>
          </a>
       </div>
         </div>

         </>

        }
                 <div className=" mean-container  hidden tabletmin:block ">

<div className="mean-bar">
<nav className={`mean-nav ${menuOpens ? 'toggle' : ''}`}>
    <nav>
      <ul className="">
        <li className="current" onClick={()=>{
          scrollToTop()
          handleMenuToggle()
        }}><a >Home</a></li>
        <li onClick={()=>{
          ScrolltoDiv()
          handleMenuToggle()
          }}><a >About</a></li>
        <li className=""  onClick={()=>{
          ScrolltoServices()
          handleMenuToggle()}}><a >Services</a></li>
        <li className="" onClick={()=>{
          ScrolltoResume()
          handleMenuToggle()}} ><a>Resume</a></li>
        <li onClick={()=>{
          scrollToPortfolio()
          handleMenuToggle()}}><a >Portfolio</a></li>
        <li className="" onClick={()=>{Handleblog()
         handleMenuToggle()}}><a >Blog</a></li>
        <li className="mean-last" onClick={()=>{
          HandleContact()
          handleMenuToggle()}}><a>Contact</a></li>
      </ul>
    </nav>
  </nav></div>
 </div>
        </div>
      </nav>

      {/*Home*/}
      <section
        className=" h-[fit-content]  bg-[#333333] p-[0px] relative" id="main" >
        <div className="lg:flex px-[5px] items-center justify-center m-auto gap-[130px] Laptopmin:px-[40px]  Laptopmin:flex  tabletmin:px-[50px] small:pt-[30px] small:px-[20px]  ">
          <div className=" small:my-[50px] tabletmin:pb-[50px]">
            <div className="">
              <h5 className="text-[#ff66c4] text-[20px]  ">
                Hello!
              </h5>
              <h2 className="text-[#fff]  text-[30px]  font-[700] max-w-[550px] Laptopmin:max-w-[500px] tabletmin:max-w-[600px] tabletmin:w-[auto]  Laptopmin:w-auto w-auto">
                I{"'"}m Professional content Writter &
                <span className="text-[#ff66c4]">Content strategy</span>{" "}
              </h2>
              <p className="text-[18px] leading-[30px] text-[#fff] max-w-[550px] Laptopmin:max-w-[500px] Laptopmin:w-auto w-auto small:max-w-[600px] small:w-[auto]">
                {" "}
                Okanume Precious is a content writer who specifically simplifies
              sales for entrepreneurs by helping them build an active
                buying
               audience on social media.
              </p>
            </div>
            <div className="flex gap-2 items-center mt-[0px] h-[fit-content] small:flex small:gap-1 w-[auto]">
              {/* <Button /> */}
            </div>
          </div>
          <div className="mb-[5px] tabletmin:pt[90px]">
            {" "}
            <img src={User} alt="" className="m-[auto]" draggable="false"></img>
          </div>
        </div>
      </section> 

      {/*about*/}
      <section
        className="bg-[#312f2f]  h-[fit-content] w-[auto] relative justify-center py-8 "
        id="about"
      >
        <div className="flex item-center justify-center gap-[20px] pt-[50px] Laptopmin:px-[50px] tabletmin:flex tabletmin:flex-col ">
          <div>
            <div className="tabletmin:px-[40px] small:px-[15px]">
              <div className="">
                <h5 className="text-[#ff66c4] text-[20px] mb-[15px] font-[500]">
                  About Me
                </h5>
                <h2 className="text-[#ccccc2] text-[20px] mb-[20px] font-[700] leading-[31px] w-[550px]  tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto]">
                  Hello! I{"'"}m
                  <span className="text-[#ff66c4] text-[20px] mb-[10px] font-[700]">
                    Okanume Precious.
                  </span>{" "}
                  I{"'"}m Professional Content Writter,
                  & Consultation/Coaching services &amp;{" "}
                  <span className="text-[#ff66c4] text-[20px] mb-[10px] font-[700]">
                    Content strategy.
                  </span>
                </h2>
                <p className="w-[600px] text-[#ccccc2] text-[15px] mb-[12px] leading-[25px] Laptopmin:w-[550px] max-w-[700px] tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto] ">
                  Okanume Precious is a content writer who specifically
                  simplifies sales for entrepreneurs by helping them build an
                  active buying audience on social media. By writing
                  strategically, she grew her page from 0-2000 in less than
                  eight weeks, thereby gaining 50+ customers in a month. All
                  organically. She has top articles published on different
                  newspaper sites, including Punch and Tribune newspaper.
                </p>
                <p className="w-[600px] text-[#ccccc2] text-[15px] leading-[20px] mb-3  Laptopmin:w-[550px]  tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[500px] small:w-[auto]">
                  {" "}
                  She won as the first runner up in Naitalk Essay Competition
                  2022. She was also listed among the top 10 and 20 winners in
                  the Value Wisdom Writers Academy Competition 2023.
                </p>
                <div className="flex items-center">
                  <span className="f-[700] text-[18px] text-[#ccccc2] pr-[15px] pb-[20px]">
                    Follow Me :
                  </span>
                  <ul className="flex gap-[10px] mb-5">
                    <li>
                      <Link href="https://www.facebook.com/profile.php?id=100090268895002">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoFacebook />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/__Mmesoma__">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <BiLogoTwitter />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/okanume_precious/">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoInstagram />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/precious-okanume-48117226a/">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <BiLogoLinkedin />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-info-btn mt-30 flex">
                  <Link href="#" className="button-1  whitespace-nowrap text-center">
                    My Work <span></span>
                  </Link>
                  <a href="#" className="button-2  whitespace-nowrap text-center">
                    Dwonload Cv <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[20px] m-[0] tabletmin:px-[40px] small:px-[15px] pb-10 smaller:grid smaller:grid-cols-1">
            <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center px-[80px] Laptopmin:px-[50px] tabletmin:px-[20px] tabletmin:py-[20px]  rounded-[5px] justify-center mb-[-96px] small:mb-[0]  flex-col ">
              <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
              <CountUp start={0} end={500} duration={10}/>
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">Happyclient</span>
            </div>
            <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center rounded-[5px] tabletmin:mb-0 small:mb-[0] mb-[-96px] flex-col  ">
              <h2 className="text-[40px] text-[#ffffff] font-[900]  counter">
               <CountUp start={0} end={2001} duration={8}/>
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">sales</span>
            </div>
            <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center rounded-[5px] tabletmin:mb-0 small:mb-[0] flex-col">
              <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
             <CountUp start={0} end={5000} duration={10}/>
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">
                Project Complete
              </span>
            </div>
            <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center flex-col rounded-[5px] ">
              <h2 className="text-[40px] text-[#ffffff] font-[900] mb-[10px] counter">
             <CountUp start={0} end={6} duration={30}/>
              </h2>
              <span className="text-[#e1d0d0] text-[15px] ">Experience</span>
            </div>
          </div>
        </div>
      </section>
 

      {/*services */}
      <section
        className="bg-[#333333]  h-[fit-content] flex  items-center justify-center  mx-[45px] pt-[30px] pb-[0px]"
        id="services"
      >
        <div className="services-area ">
          <div className="">
            <div className="row">
              <div className="">
                <div className="section-headding text-center justify-center">
                  <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
                    Our Services
                  </h2>
                  <div className="title-divider"></div>
                  <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[700px]  small:w-[311px] items-center small:px-0  ">
                    Okanume Precious offers a range of services focused on
                    simplifying sales for entrepreneurs and helping them build
                    an active buying audience on social media.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 m-auto gap-[20px]  tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:flex small:flex-col  small:items-center small:px-[10px] small:justify-center">
              <div className="services-box px-[20px] small:px- small:w-[100%]  py-[35px] text-center rounded-[6px] bg-[#262020] small:flex small:items-center small:justify-center small:flex-col">
                <div className="icon">
                  <FcConferenceCall />
                </div>
                <h2> Social Media Audience Building</h2>
                <p className="">
                  Precious helps entrepreneurs build a strong buying audience on
                  social media through strategic content writing.
                </p>
              </div>

              <div className="services-box px-[20px] small:w-[100%]  py-[35px] text-center rounded-[6px] bg-[#262020]">
                <div className="icon">
                  <FcBusinesswoman />
                </div>
                <h2>Compelling Content Creator</h2>
                <p>
                  Precious crafts persuasive content that attracts customers and
                  grows businesses organically.
                </p>
              </div>

              <div className="services-box px-[30px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
                <div className="icon">
                  <FcCustomerSupport />
                </div>
                <h2>Content Strategy Consultant</h2>
                <p>
                  Precious provides expert advice on developing effective
                  content strategies to reach and engage target audiences.
                </p>
              </div>

              <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
                <div className="icon">
                  <img src={Edit} alt="" className="h-[50px] w-[50px]" />
                </div>
                <h2>Professional Editor</h2>
                <p>
                  Precious enhances written materials by eliminating errors and
                  improving overall quality.
                </p>
              </div>

              <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
                <div className="icon">
                  <FcSportsMode />
                </div>
                <h2>Writing Workshops Trainer</h2>
                <p>
                  Precious conducts interactive sessions to improve content
                  writing skills and storytelling techniques.
                </p>
              </div>

              <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
                <div className="icon">
                  <FcReading />
                </div>
                <h2>ManuscriptRefiner</h2>
                <p>
                  Precious creatively enhances manuscripts, making them
                  captivating and ready forpublication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </section>

      {/*Resume*/}
      <section
        className="bg-[#312f2f]   h-[100vh-10px] w-[auto] relative justify-center mt-[20px] pt-[30px]"
        id="resume"
      >
        <div className="bg-[#312f2f] ">
          <div className="">
            <div className="section-headding text-center justify-center">
              <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
                Our Resume
              </h2>
              <div className="title-divider"></div>
              <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
                Okanume Precious offers a range of services focused on
                simplifying sales for entrepreneurs and helping them build an
                active buying audience on social media.
              </p>
            </div>
          </div>

          <div className="">
            <div className="resume-title my-[40px] text-center ">
              <h2 className="text-[30px]  font-[700] leading-[1px] text-[#ccc] ">
                My Education
              </h2>
            </div>
            <div className="flex gap-[35px] justify-evenly px-[50px]  tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:grid small:grid-cols-1 small:px-[15px]">
              <div className="shadow-custom  bg-[#333333] ">
                <div className="resume-item-box">
                  <span>2006 - 2010</span>
                  <h2>Bachelor Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
              <div className="shadow-custom  bg-[#333333]">
                <div className="resume-item-box">
                  <span>2006 - 2010</span>
                  <h2>Bachelor Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
              <div className="shadow-custom  bg-[#333333] ">
                <div className="resume-item-box">
                  <span>2011 - 2015</span>
                  <h2>Master Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#312f2f] ">
            <div className="resume-title my-[40px] text-center ">
              <h2 className="text-[30px]  font-[700] leading-[1px] text-[#ccc] ">
                My Experience
              </h2>
            </div>
            <div className="flex gap-[35px] justify-evenly px-[50px] pb-[40px] tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:grid small:grid-cols-1 small:px-[15px]">
              <div className="shadow-custom  bg-[#333333]">
                <div className="resume-item-box">
                  <span>2006 - 2010</span>
                  <h2>Bachelor Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
              <div className="shadow-custom  bg-[#333333]">
                <div className="resume-item-box">
                  <span>2006 - 2010</span>
                  <h2>Bachelor Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
              <div className="shadow-custom  bg-[#333333] ">
                <div className="resume-item-box">
                  <span>2011 - 2015</span>
                  <h2>Master Degree</h2>
                  <h4>International University</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean consectetur ut lorem vitae ultricies. Integer porta,
                    libero sit amet pretium lobortis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*portfolio*/}

      <section
        id="portfolio"
        className="bg-[#333333]  h-fit-content w-[auto] relative justify-center pt-[50px]"
      >
        <div className="bg-[#333333] ">
          <div className="">
            <div className="section-headding text-center justify-center">
              <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
                Our Portfolio
              </h2>
              <div className="title-divider"></div>
              <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
                Okanume Precious offers a range of services focused on
                simplifying sales for entrepreneurs and helping them build an
                active buying audience on social media.
              </p>
            </div>

            <div className="row">
              <div className="portfolio-list my-10 text-center">
                <ul>
                  <li
                    data-filter="all"
                    className="mixitup-control-active cursor-pointer text-[#fff]"
                  >
                    all
                  </li>
                  <li data-filter=".web" className="cursor-pointer text-[#fff]">
                    web
                  </li>
                  <li data-filter=".app" className="cursor-pointer text-[#fff]">
                    app
                  </li>
                  <li data-filter=".card1" className="cursor-pointer text-[#fff]">
                    card
                  </li>
                </ul>
              </div>
              <div
                className="portfolio-full grid grid-cols-3 gap-[20px] portF px-[90px] pb-5  tabletmin:grid-cols-2 small:grid-cols-1 small:px-[15px]"
                id="MixItUpF028EA"
              >
                {/* <!-- Single --> */}
                <div className="lg:col-4 md:col-6 mb-30 mix web">
                  <div className="portfolio-item">
                    <img src={portfolio1} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          href="https://www.preetheme.com/html/codec/assets/img/portfolio/item1.jpg"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix app">
                  <div className="portfolio-item">
                    <img src={portfolio2} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          href="https://www.preetheme.com/html/codec/assets/img/portfolio/item2.jpg"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix card1">
                  <div className="portfolio-item">
                    <img src={portfolio3} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          href="https://www.preetheme.com/html/codec/assets/img/portfolio/item3.jpg"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix card1">
                  <div className="portfolio-item">
                    <img src={portfolio4} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href="	https://www.preetheme.com/html/codec/assets/img/portfolio/item4.jpg"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix app">
                  <div className="portfolio-item">
                    <img src={portfolio5} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href="	https://www.preetheme.com/html/codec/assets/img/portfolio/item5.jpg
"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Single --> */}
                <div className="col-lg-4 col-md-6 mb-30 mix web">
                  <div className="portfolio-item">
                    <img src={portfolio6} alt="Portfolio" />
                    <div className="portfolio-item-overly">
                      <div className="portfolio-item-overly-full">
                        <a
                          className="zoom"
                          href="https://www.preetheme.com/html/codec/assets/img/portfolio/item6.jpg"
                          data-fancybox="gallery"
                        >
                          <i className="fas fa-search-plus">
                            <FaSearchengin />
                          </i>
                        </a>
                        <a className="cursor-pointer">
                          <i
                            className="fas fa-link"
                            onClick={() => {
                              scrollToTop();
                              Handleactive("main");
                            }}
                          >
                            <BsLink45Deg />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* client */}
      <section className="bg-[#312f2f]   h-[fit-content] w-[auto] relative justify-center mt-[1px] pt-[30px] client-review-area">
        <div className="">
          {/* <!-- Section Headding --> */}
          <div className="section-headding text-center justify-center">
            <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
              Our Client feedback
            </h2>
            <div className="title-divider"></div>
            <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
              Okanume Precious offers a range of services focused on simplifying
              sales for entrepreneurs and helping them build an active buying
              audience on social media.
            </p>
          </div>
          <div className="">
            {/* <Slick /> */}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section
        id="blog"
        className="bg-[#333333]  h-[fit-content] w-[auto] relative justify-center "
      >
        <div className="bg-[#333333] py-[50px]">
          <div className="section-headding text-center justify-center">
            <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
              Our Blogs
            </h2>
            <div className="title-divider"></div>
            <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
              Okanume Precious offers a range of services focused on simplifying
              sales for entrepreneurs and helping them build an active buying
              audience on social media.
            </p>
          </div>

          <div className="flex gap-5 px-[55px] tabletmin:grid tabletmin:grid-cols-2 small:grid small:grid-cols-1 small:px-[15px]">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-single">
                <div className="blog-thumbnail">
                  <img src={User3} alt="blog-image" />
                  <div className="date-box">
                    <span>
                      8 <br /> Feb
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Sapien in Purus</a>
                  </h3>
                  <div className="blog-meta">
                    <a href="#">by Admin</a>
                    <span className="sep">/</span>
                    <a href="#">2 Comments</a>
                    <span className="sep">/</span>
                    <a href="#">Design</a>
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <a href="#" className="read-more">
                    Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-single">
                <div className="blog-thumbnail">
                  <img src={User4} alt="blog-image" />
                  <div className="date-box">
                    <span>
                      8 <br /> Feb
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Sapien in Purus</a>
                  </h3>
                  <div className="blog-meta">
                    <a href="#">by Admin</a>
                    <span className="sep">/</span>
                    <a href="#">2 Comments</a>
                    <span className="sep">/</span>
                    <a href="#">Design</a>
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <a href="#" className="read-more">
                    Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-single">
                <div className="blog-thumbnail">
                  <img src={User5} alt="blog-image" />
                  <div className="date-box">
                    <span>
                      8 <br /> Feb
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">Social Science & Humanities</a>
                  </h3>
                  <div className="blog-meta">
                    <a href="#">by Admin</a>
                    <span className="sep">/</span>
                    <a href="#">2 Comments</a>
                    <span className="sep">/</span>
                    <a href="#">Design</a>
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <a href="#" className="read-more">
                    Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="bg-[#312f2f]  h-[fit-content] w-[auto] relative justify-center py-[20px]"  id="contact">
        <div className="bg-[#312f2f] py-[50px]">
          <div className="section-headding text-center justify-center">
            <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
              Contact Us
            </h2>
            <div className="title-divider"></div>
            <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-[15px] ">
              Okanume Precious offers a range of services focused on simplifying
              sales for entrepreneurs and helping them build an active buying
              audience on social media.
            </p>
          </div>

          <div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="contact-form">
							<form action="#"  className=" justify-center items-center  px-[250px] small:px-[20px] tabletmin:px-[50px]">
								<div className="  gap-4">
                  <div className="grid grid-cols-2 justify-center gap-4 input-sub tabletmin:grid tabletmin:grid-cols-1">
                    
									<div className="col-lg-6">
										<input type="text" name="name" placeholder="Your Name"  />
									</div>
									<div className="col-lg-6">
										<input type="email" name="email" placeholder="Your Email"   />
									</div>
                  </div>
									<div className="col-12">
										<input type="text" name="sub" placeholder="Your Subject" />
									</div>
									<div className="col-12">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
									<div className="col-12">
										<button className="button-1" type="submit">Submit <span></span></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
        </div>
      </section>






      {/* <!-- Start Footer Area --> */}
      <Footer>


		<footer className="footer  bg-[#333333]   h-[fit-content] w-[auto] relative flex justify-between tabletmin:items-center  flex-col ">
			<div className="footer-top pt-[-20px] pb-[20px]">
				<div className="">
					<div className="flex flex-row   justify-center  gap-[30px] pt-20 px-[40px] tabletmin:flex-none tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] tabletmin:px-[20px] small:px-[15px]  small:grid-cols-1">
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget-single">
								<h2>CodeC</h2>
								<p className="w-[300px] Laptopmin:w-[200px] tabletmin:w-[350px] small:max-w-[500px] small:w-[auto] ">Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 w-[300px]">
							<div className="footer-widget-single">
								<h3>Useful Links</h3>
								<ul>
									<li><a href="#home">home</a></li>
									<li><a href="#about">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Terms of service</a></li>
									<li><a href="#">Privacy policy</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 w-[300px]">
							<div className="footer-widget-single">
								<h3>Our Services</h3>
								<ul>
									<li><a href="#home">Photography</a></li>
									<li><a href="#about">Web Design</a></li>
									<li><a href="#">Woocommerce</a></li>
									<li><a href="#">Brand Image</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 w-[300px]">
							<div className="footer-widget-single">
								<h3>Contact Us</h3>
								<p>
					              A108 Adam Street <br />
					              New York, NY 535022<br />
					              United States <br />
					              <strong>Phone:</strong> +1 5589 55488 55<br />
					              <strong>Email:</strong> info@example.com<br />
					            </p>
								<ul className="social-link">
                <li>
                      <Link href="https://www.facebook.com/profile.php?id=100090268895002">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoFacebook />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/__Mmesoma__">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <BiLogoTwitter />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/okanume_precious/">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          <BiLogoInstagram />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/precious-okanume-48117226a/">
                        <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
                          {" "}
                          <BiLogoLinkedin />
                        </i>
                      </Link>
                    </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom pt-[20px] pb-[20px] text-center bg-[#312f2f] w-[100%] ">
				<p className="text-[#ccc] ">@ Copyright <a href="#">CodexUnicTheme</a>  | All Rights Reserved</p>
			</div>
		</footer>
      </Footer>
		{/* <!-- End Footer Area --> */}
      <div className="scroll-area block"  onClick={scrollToTop}>
       <i className="fa fa-angle-up"><FaAngleUp /></i>
    </div>
     
    </div>
    </>
  )
}

export default App


// const App = ()=> {
//   const [activeLink, setActiveLink] = useState("");
//   const [isSticky, setIsSticky] = useState(false);
 


// const [menuVisible, setMenuVisible] = useState(false);

// useEffect(() => {
//   const handleResize = () => {
//     setMenuVisible(window.innerWidth <= 991);
//   };

//   handleResize(); // Set initial value on page load
//   window.addEventListener('resize', handleResize);

//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);


//   useEffect(() => {
//     const handleScroll = () => {
//       const scroll = window.scrollY;
//       setIsSticky(scroll >= 100);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const Handleactive = (section) => {
//     setActiveLink(section);
//   };

//   function debounce(func, delay) {
//     let timeout;
//     return function() {
//       const context = this;
//       const args = arguments;
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         func.apply(context, args);
//       }, delay);
//     };
//   }
  

 
//   useEffect(() => {
//     setActiveLink("main");
//     const handleScroll = debounce(() => {
//       const navbarHeight = 96;
//       const sections = document.querySelectorAll("section");
//       const scrollPosition =
//         window.pageYOffset || document.documentElement.scrollTop;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - navbarHeight;
//         const sectionBottom = sectionTop + section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//           setActiveLink(section.id);
//         }
//       });
//     }, 100); // Adjust the debounce time as needed

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);



 

 

//   const scrollToSection = (sectionName) => {
//     const targetElement = document.getElementById(sectionName);
//     const navbarHeight = 96;
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - navbarHeight,
//         behavior: "smooth",
//       });
//       Handleactive(sectionName);
//     }
//   };
  
//   const Handleblog = () => {
//     scrollToSection("blog");
//   };
//   const scrollToTop =()=>{
//     scrollToSection("main");
//   }
  
//   const HandleContact = () => {
//     scrollToSection("contact");
//   };
//   const scrollToPortfolio = () => {
//     scrollToSection("portfolio");
//   };

//   const ScrolltoResume = () => {
//     scrollToSection("resume");
//   };

//   const ScrolltoServices = () => {
//     scrollToSection("services");
//   };
//   const ScrolltoDiv = () => {
//     scrollToSection("about");
 
//   };

  
//        Fancybox.bind('[data-fancybox="gallery"]', {
//          //
//        });

//   useEffect(() => {
//     // Initialize MixItUp
//     const container = document.querySelector(".portF");
//     Mixitup(container);

//     // Handle filter click events
//     const filterButtons = document.querySelectorAll(".portfolio-list ul li");
//     filterButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const filterValue = button.getAttribute("data-filter");
//         Mixitup(container, { filter: filterValue });
//       });
//     });
//   }, []);

// $(window).on('scroll',function(){
//     var a = $(window).scrollTop();
//     if(a>400){
//         $('.scroll-area').slideDown(300);
//     }else{
//         $('.scroll-area').slideUp(200);
//     }
// });


// const [menuOpens, setMenuOpens] = useState(false);

// const handleMenuToggle = () => {
//   setMenuOpens(!menuOpens);

// };
// const Footer = styled.div`

// .footer-widget-single h2 {
// 	font-size: 30px;
// 	font-weight: 900;
// 	margin-bottom: 10px;
// 	color: #fff;
// }
// .footer-widget-single p {
// 	color: #ccc;
// }
// .footer-widget-single h3 {
// 	font-size: 18px;
// 	font-weight: bold;
// 	color: #fff;
// 	text-transform: uppercase;
// 	position: relative;
// 	padding-bottom: 12px;
// 	margin-bottom: 10px;
// }
// .footer-widget-single h3::before {
// 	content: "";
// 	background: #94c045;
// 	width: 80px;
// 	overflow: hidden;
// 	height: 3px;
// 	position: absolute;
// 	bottom: 0;
// 	clear: both;
// 	display: block;
// 	z-index: 1;
// }
// .footer-widget-single h3::after {
// 	content: "";
// 	clear: both;
// 	display: block;
// 	overflow: hidden;
// 	background: #3c4133;
// 	width: 100%;
// 	height: 3px;
// 	bottom: 0;
// 	position: absolute;
// 	left: 0;
// }
// .footer-widget-single ul li {
// 	line-height: 32px;
// }
// .footer-widget-single ul li a {
// 	color: #ccc;
// 	text-transform: capitalize;
// }
// .footer-widget-single ul li a:hover {
// 	color: #fff;
// }
// .footer-widget-single strong {
// 	color: #fff;
// }
// .footer-widget-single ul.social-link {
// 	margin-top: 15px;
// }
// .footer-widget-single ul.social-link li {
// 	line-height: 20px;
// 	display: inline-block;
// 	margin: 3px;
// }
// .footer-widget-single ul.social-link li a {
// 	display: inline-block;
// }
// .footer-widget-single ul.social-link li a i {
// 	font-size: 14px;
// 	display: flex;
// 	background: #3c4133;
// 	color: #fff;
// 	line-height: 1;
// 	padding: 8px 0;
// 	border-radius: 50%;
// 	text-align: center;
// 	width: 36px;
// 	height: 36px;
// 	transition: 0.3s;
// 	justify-content: center;
// 	align-items: center;
// }
// .footer-widget-single ul.social-link li a i:hover {
// 	background: #ff66c4;
// }
// .footer-bottom p {
// 	font-size: 15px;
// }
// .footer-bottom p a{
// 	color: #ccc;
// 	font-weight: 700;
// }
// .footer-bottom p a:hover{
// 	color: #fff;
// }

// @media(max-width: 766px){
//   .footer-widget-single h3::before {
// 	content: "";
// 	background: #94c045;
//   max-width: 150px;
// 	width: 100px;
// 	overflow: hidden;
// 	height: 3px;
// 	position: absolute;
// 	bottom: 0;
// 	clear: both;
// 	display: block;
// 	z-index: 1;
// }
// .footer-widget-single h3::after {
// 	content: "";
// 	clear: both;
// 	display: block;
// 	overflow: hidden;
// 	background: #3c4133;
//   max-width: 151%;
// 	width: 100%;
// 	height: 3px;
// 	bottom: 0;
// 	position: absolute;
// 	left: 0;
// }
// }
// `

//   return (
//     <>
//          <div className="bg-[#333333]" >
//       {/*navbar*/}
//      {/* <VideoPlayer /> */}
//       <nav
//         className={`lg:flex Laptopmin:flex items-center gap-5 justify-between bg-[#333333] py-[10px] Laptopmin:gap-[30px]  px-[30px] pr-10  left-0 w-full sticky top-0 z-10 Laptopminbg:gap-[40px] tabletmin:h-fit-content small:px-[25px] Laptopmin:px-[60px] ${
//           isSticky
//             ? " z-50  animate-sticky shadow-custom sticky bg-[#333333] h-auto"
//             : ""
//         } `}
//       >
         
       
//         {/* ${isMenuOpen ? 'open block' : 'hidden'} */}
//         <figure
//           onClick={() => {
//             scrollToTop();
//             Handleactive("main");
//           }}
//         >
//           <img
//             alt=""
//             src={user1}
//             className="h-[70px] w-auto pb-2 select-none cursor-pointer items-end Laptopmin:h-[65px] Laptopmin:mr-5  Laptopminbg:h-[70px]  tabletmin:bottom-[10px] tabletmin:hidden small:absolute small:left-[10px] tabletmin:h-[55px] "
//           />
       
//         </figure>
       
//         <div>
     
//           <ul className="flex gap-12 lg:gap-[40px] items-end text-[#e1d0d0] text-[15px] Laptopmin:text-[14px]  Laptopminbg:gap-[30px] tabletmin:hidden ">
//             {/* Add Next.js Link to all the li elements */}
//             <li
//               onClick={() => {
//                 scrollToTop();
//                 Handleactive("main");
//               }}
//               className={`cursor-pointer  hover:text-[#ffff]  ${
//                 activeLink === "main" ? "text-[#ffff] cursor-pointer" : "text-[#e1d0d0]"
//               }`}
//               id="home"
//             >
//               HOME
//             </li>
//             <li
//               onClick={() => {
//                 ScrolltoDiv();
//                 Handleactive("about");
//               }}
//               className={`cursor-pointer hover:text-[#ffff] ${
//                 activeLink === "about" ? "text-[#ffff] cursor-pointer" : "text-[#e1d0d0]"
//               }`}
//               id="bout"
//             >
//               ABOUT
//             </li>
//             <li
//               onClick={ScrolltoServices}
//               className={`cursor-pointer hover:text-[#ffff] ${
//                 activeLink === "services" ? "text-[#ffff]" : "text-[#e1d0d0]"
//               }`}
//               id="serve"
//             >
//               SERVICES
//             </li>
//             <li
//               onClick={ScrolltoResume}
//               className={`cursor-pointer hover:text-[#fff] ${
//                 activeLink === "resume" ? "text-[#ffff]" : "text-[#e1d0d0]"
//               }`}
//             >
//               RESUME
//             </li>
//             <li
//               onClick={scrollToPortfolio}
//               className={`cursor-pointer hover:text-[#ffff] ${
//                 activeLink === "portfolio" ? "text-[#ffff]" : "text-[#e1d0d0]"
//               }`}
//             >
//               PORTFOLIO
//             </li>
//             <li
//               onClick={Handleblog}
//               className={`cursor-pointer hover:text-[#ffff] ${
//                 activeLink === "blog" ? "text-[#ffff]" : "text-[#e1d0d0]"
//               }`}
//             >
//               BLOG
//             </li>
//             <li 
            
//             onClick={HandleContact}
//             className={`cursor-pointer hover:text-[#ffff] ${
//               activeLink === "contact" ? "text-[#ffff]" : "text-[#e1d0d0]"
//             }`} >CONTACT</li>
//           </ul>
         
//           {menuVisible && 
//          <>
        
//          <div className="mobile-menu mean-container flex justify-between ">
//          <img
//             alt=""
//             src={user4}
//             className="h-[60px] w-auto  select-none cursor-pointer ml-[-30px] "
//             onClick={() => {
//               scrollToTop();
//               Handleactive("main");
//             }}
//           />  

//         <div className="mean-bar"><a  className={` meanmenu-reveal meanclose right-0 left-auto text-center text-indent-0 text-18`}  >
//         <div className="open hidden tabletmin:block tabletmin:rounded-[1px] x border-[1px] border-white p-[10px] text-[white] text-[25px] cursor-pointer w-[fit-content]"   onClick={handleMenuToggle}>
//           { menuOpens ?<FaTimes />   : <GiHamburgerMenu /> }
         
//         </div>
//           </a>
//        </div>
//          </div>

//          </>

//         }
//                  <div className=" mean-container  hidden tabletmin:block ">

// <div className="mean-bar">
// <nav className={`mean-nav ${menuOpens ? 'toggle' : ''}`}>
//     <nav>
//       <ul className="">
//         <li className="current" onClick={()=>{
//           scrollToTop()
//           handleMenuToggle()
//         }}><a >Home</a></li>
//         <li onClick={()=>{
//           ScrolltoDiv()
//           handleMenuToggle()
//           }}><a >About</a></li>
//         <li className=""  onClick={()=>{
//           ScrolltoServices()
//           handleMenuToggle()}}><a >Services</a></li>
//         <li className="" onClick={()=>{
//           ScrolltoResume()
//           handleMenuToggle()}} ><a>Resume</a></li>
//         <li onClick={()=>{
//           scrollToPortfolio()
//           handleMenuToggle()}}><a >Portfolio</a></li>
//         <li className="" onClick={()=>{Handleblog()
//          handleMenuToggle()}}><a >Blog</a></li>
//         <li className="mean-last" onClick={()=>{
//           HandleContact()
//           handleMenuToggle()}}><a>Contact</a></li>
//       </ul>
//     </nav>
//   </nav></div>
//  </div>
//         </div>
//       </nav>

//       {/*Home*/}
//       <section
//         className=" h-[fit-content]  bg-[#333333] p-[0px] relative" id="main" >
//         <div className="lg:flex px-[5px] items-center justify-center m-auto gap-[130px] Laptopmin:px-[40px]  Laptopmin:flex  tabletmin:px-[50px] small:pt-[30px] small:px-[20px]  ">
//           <div className=" small:my-[50px] tabletmin:pb-[50px]">
//             <div className="">
//               <h5 className="text-[#ff66c4] text-[20px]  ">
//                 Hello!
//               </h5>
//               <h2 className="text-[#fff]  text-[30px]  font-[700] max-w-[550px] Laptopmin:max-w-[500px] tabletmin:max-w-[600px] tabletmin:w-[auto]  Laptopmin:w-auto w-auto">
//                 I{"'"}m Professional content Writter &
//                 <span className="text-[#ff66c4]">Content strategy</span>{" "}
//               </h2>
//               <p className="text-[18px] leading-[30px] text-[#fff] max-w-[550px] Laptopmin:max-w-[500px] Laptopmin:w-auto w-auto small:max-w-[600px] small:w-[auto]">
//                 {" "}
//                 Okanume Precious is a content writer who specifically simplifies
//               sales for entrepreneurs by helping them build an active
//                 buying
//                audience on social media.
//               </p>
//             </div>
//             <div className="flex gap-2 items-center mt-[0px] h-[fit-content] small:flex small:gap-1 w-[auto]">
//               {/* <Button /> */}
//             </div>
//           </div>
//           <div className="mb-[5px] tabletmin:pt[90px]">
//             {" "}
//             <img src={User} alt="" className="m-[auto]" draggable="false"></img>
//           </div>
//         </div>
//       </section> 

//       {/*about*/}
//       <section
//         className="bg-[#312f2f]  h-[fit-content] w-[auto] relative justify-center py-8 "
//         id="about"
//       >
//         <div className="flex item-center justify-center gap-[20px] pt-[50px] Laptopmin:px-[50px] tabletmin:flex tabletmin:flex-col ">
//           <div>
//             <div className="tabletmin:px-[40px] small:px-[15px]">
//               <div className="">
//                 <h5 className="text-[#ff66c4] text-[20px] mb-[15px] font-[500]">
//                   About Me
//                 </h5>
//                 <h2 className="text-[#ccccc2] text-[20px] mb-[20px] font-[700] leading-[31px] w-[550px]  tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto]">
//                   Hello! I{"'"}m
//                   <span className="text-[#ff66c4] text-[20px] mb-[10px] font-[700]">
//                     Okanume Precious.
//                   </span>{" "}
//                   I{"'"}m Professional Content Writter,
//                   & Consultation/Coaching services &amp;{" "}
//                   <span className="text-[#ff66c4] text-[20px] mb-[10px] font-[700]">
//                     Content strategy.
//                   </span>
//                 </h2>
//                 <p className="w-[600px] text-[#ccccc2] text-[15px] mb-[12px] leading-[25px] Laptopmin:w-[550px] max-w-[700px] tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[600px] small:w-[auto] ">
//                   Okanume Precious is a content writer who specifically
//                   simplifies sales for entrepreneurs by helping them build an
//                   active buying audience on social media. By writing
//                   strategically, she grew her page from 0-2000 in less than
//                   eight weeks, thereby gaining 50+ customers in a month. All
//                   organically. She has top articles published on different
//                   newspaper sites, including Punch and Tribune newspaper.
//                 </p>
//                 <p className="w-[600px] text-[#ccccc2] text-[15px] leading-[20px] mb-3  Laptopmin:w-[550px]  tabletmin:max-w-[800px] tabletmin:w-[auto]   small:max-w-[500px] small:w-[auto]">
//                   {" "}
//                   She won as the first runner up in Naitalk Essay Competition
//                   2022. She was also listed among the top 10 and 20 winners in
//                   the Value Wisdom Writers Academy Competition 2023.
//                 </p>
//                 <div className="flex items-center">
//                   <span className="f-[700] text-[18px] text-[#ccccc2] pr-[15px] pb-[20px]">
//                     Follow Me :
//                   </span>
//                   <ul className="flex gap-[10px] mb-5">
//                     <li>
//                       <Link href="https://www.facebook.com/profile.php?id=100090268895002">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           <BiLogoFacebook />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://twitter.com/__Mmesoma__">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           {" "}
//                           <BiLogoTwitter />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://www.instagram.com/okanume_precious/">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           <BiLogoInstagram />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://www.linkedin.com/in/precious-okanume-48117226a/">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           {" "}
//                           <BiLogoLinkedin />
//                         </i>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="about-info-btn mt-30 flex">
//                   <Link href="#" className="button-1  whitespace-nowrap text-center">
//                     My Work <span></span>
//                   </Link>
//                   <a href="#" className="button-2  whitespace-nowrap text-center">
//                     Dwonload Cv <span></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-[20px] m-[0] tabletmin:px-[40px] small:px-[15px] pb-10 smaller:grid smaller:grid-cols-1">
//             <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center px-[80px] Laptopmin:px-[50px] tabletmin:px-[20px] tabletmin:py-[20px]  rounded-[5px] justify-center mb-[-96px] small:mb-[0]  flex-col ">
//               <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
//               <CountUp start={0} end={500} duration={10}/>
//               </h2>
//               <span className="text-[#e1d0d0] text-[15px] ">Happyclient</span>
//             </div>
//             <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center rounded-[5px] tabletmin:mb-0 small:mb-[0] mb-[-96px] flex-col  ">
//               <h2 className="text-[40px] text-[#ffffff] font-[900]  counter">
//                <CountUp start={0} end={2001} duration={8}/>
//               </h2>
//               <span className="text-[#e1d0d0] text-[15px] ">sales</span>
//             </div>
//             <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center rounded-[5px] tabletmin:mb-0 small:mb-[0] flex-col">
//               <h2 className="text-[40px] text-[#ffffff] font-[900] counter">
//              <CountUp start={0} end={5000} duration={10}/>
//               </h2>
//               <span className="text-[#e1d0d0] text-[15px] ">
//                 Project Complete
//               </span>
//             </div>
//             <div className="bg-[#3e3c3c] h-[150px] w-[auto] flex items-center justify-center flex-col rounded-[5px] ">
//               <h2 className="text-[40px] text-[#ffffff] font-[900] mb-[10px] counter">
//              <CountUp start={0} end={6} duration={30}/>
//               </h2>
//               <span className="text-[#e1d0d0] text-[15px] ">Experience</span>
//             </div>
//           </div>
//         </div>
//       </section>
 

//       {/*services */}
//       <section
//         className="bg-[#333333]  h-[fit-content] flex  items-center justify-center  mx-[45px] pt-[30px] pb-[0px]"
//         id="services"
//       >
//         <div className="services-area ">
//           <div className="">
//             <div className="row">
//               <div className="">
//                 <div className="section-headding text-center justify-center">
//                   <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//                     Our Services
//                   </h2>
//                   <div className="title-divider"></div>
//                   <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[700px]  small:w-[311px] items-center small:px-0  ">
//                     Okanume Precious offers a range of services focused on
//                     simplifying sales for entrepreneurs and helping them build
//                     an active buying audience on social media.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 m-auto gap-[20px]  tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:flex small:flex-col  small:items-center small:px-[10px] small:justify-center">
//               <div className="services-box px-[20px] small:px- small:w-[100%]  py-[35px] text-center rounded-[6px] bg-[#262020] small:flex small:items-center small:justify-center small:flex-col">
//                 <div className="icon">
//                   <FcConferenceCall />
//                 </div>
//                 <h2> Social Media Audience Building</h2>
//                 <p className="">
//                   Precious helps entrepreneurs build a strong buying audience on
//                   social media through strategic content writing.
//                 </p>
//               </div>

//               <div className="services-box px-[20px] small:w-[100%]  py-[35px] text-center rounded-[6px] bg-[#262020]">
//                 <div className="icon">
//                   <FcBusinesswoman />
//                 </div>
//                 <h2>Compelling Content Creator</h2>
//                 <p>
//                   Precious crafts persuasive content that attracts customers and
//                   grows businesses organically.
//                 </p>
//               </div>

//               <div className="services-box px-[30px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
//                 <div className="icon">
//                   <FcCustomerSupport />
//                 </div>
//                 <h2>Content Strategy Consultant</h2>
//                 <p>
//                   Precious provides expert advice on developing effective
//                   content strategies to reach and engage target audiences.
//                 </p>
//               </div>

//               <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
//                 <div className="icon">
//                   <img src={Edit} alt="" className="h-[50px] w-[50px]" />
//                 </div>
//                 <h2>Professional Editor</h2>
//                 <p>
//                   Precious enhances written materials by eliminating errors and
//                   improving overall quality.
//                 </p>
//               </div>

//               <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
//                 <div className="icon">
//                   <FcSportsMode />
//                 </div>
//                 <h2>Writing Workshops Trainer</h2>
//                 <p>
//                   Precious conducts interactive sessions to improve content
//                   writing skills and storytelling techniques.
//                 </p>
//               </div>

//               <div className="services-box px-[20px]  py-[35px] text-center rounded-[6px] bg-[#262020]">
//                 <div className="icon">
//                   <FcReading />
//                 </div>
//                 <h2>ManuscriptRefiner</h2>
//                 <p>
//                   Precious creatively enhances manuscripts, making them
//                   captivating and ready forpublication.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div></div>
//         <div></div>
//       </section>

//       {/*Resume*/}
//       <section
//         className="bg-[#312f2f]   h-[100vh-10px] w-[auto] relative justify-center mt-[20px] pt-[30px]"
//         id="resume"
//       >
//         <div className="bg-[#312f2f] ">
//           <div className="">
//             <div className="section-headding text-center justify-center">
//               <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//                 Our Resume
//               </h2>
//               <div className="title-divider"></div>
//               <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
//                 Okanume Precious offers a range of services focused on
//                 simplifying sales for entrepreneurs and helping them build an
//                 active buying audience on social media.
//               </p>
//             </div>
//           </div>

//           <div className="">
//             <div className="resume-title my-[40px] text-center ">
//               <h2 className="text-[30px]  font-[700] leading-[1px] text-[#ccc] ">
//                 My Education
//               </h2>
//             </div>
//             <div className="flex gap-[35px] justify-evenly px-[50px]  tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:grid small:grid-cols-1 small:px-[15px]">
//               <div className="shadow-custom  bg-[#333333] ">
//                 <div className="resume-item-box">
//                   <span>2006 - 2010</span>
//                   <h2>Bachelor Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//               <div className="shadow-custom  bg-[#333333]">
//                 <div className="resume-item-box">
//                   <span>2006 - 2010</span>
//                   <h2>Bachelor Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//               <div className="shadow-custom  bg-[#333333] ">
//                 <div className="resume-item-box">
//                   <span>2011 - 2015</span>
//                   <h2>Master Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#312f2f] ">
//             <div className="resume-title my-[40px] text-center ">
//               <h2 className="text-[30px]  font-[700] leading-[1px] text-[#ccc] ">
//                 My Experience
//               </h2>
//             </div>
//             <div className="flex gap-[35px] justify-evenly px-[50px] pb-[40px] tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] small:grid small:grid-cols-1 small:px-[15px]">
//               <div className="shadow-custom  bg-[#333333]">
//                 <div className="resume-item-box">
//                   <span>2006 - 2010</span>
//                   <h2>Bachelor Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//               <div className="shadow-custom  bg-[#333333]">
//                 <div className="resume-item-box">
//                   <span>2006 - 2010</span>
//                   <h2>Bachelor Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//               <div className="shadow-custom  bg-[#333333] ">
//                 <div className="resume-item-box">
//                   <span>2011 - 2015</span>
//                   <h2>Master Degree</h2>
//                   <h4>International University</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Aenean consectetur ut lorem vitae ultricies. Integer porta,
//                     libero sit amet pretium lobortis
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/*portfolio*/}

//       <section
//         id="portfolio"
//         className="bg-[#333333]  h-fit-content w-[auto] relative justify-center pt-[50px]"
//       >
//         <div className="bg-[#333333] ">
//           <div className="">
//             <div className="section-headding text-center justify-center">
//               <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//                 Our Portfolio
//               </h2>
//               <div className="title-divider"></div>
//               <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
//                 Okanume Precious offers a range of services focused on
//                 simplifying sales for entrepreneurs and helping them build an
//                 active buying audience on social media.
//               </p>
//             </div>

//             <div className="row">
//               <div className="portfolio-list my-10 text-center">
//                 <ul>
//                   <li
//                     data-filter="all"
//                     className="mixitup-control-active cursor-pointer text-[#fff]"
//                   >
//                     all
//                   </li>
//                   <li data-filter=".web" className="cursor-pointer text-[#fff]">
//                     web
//                   </li>
//                   <li data-filter=".app" className="cursor-pointer text-[#fff]">
//                     app
//                   </li>
//                   <li data-filter=".card1" className="cursor-pointer text-[#fff]">
//                     card
//                   </li>
//                 </ul>
//               </div>
//               <div
//                 className="portfolio-full grid grid-cols-3 gap-[20px] portF px-[90px] pb-5  tabletmin:grid-cols-2 small:grid-cols-1 small:px-[15px]"
//                 id="MixItUpF028EA"
//               >
//                 {/* <!-- Single --> */}
//                 <div className="lg:col-4 md:col-6 mb-30 mix web">
//                   <div className="portfolio-item">
//                     <img src={portfolio1} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           href="https://www.preetheme.com/html/codec/assets/img/portfolio/item1.jpg"
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <!-- Single --> */}
//                 <div className="col-lg-4 col-md-6 mb-30 mix app">
//                   <div className="portfolio-item">
//                     <img src={portfolio2} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           href="https://www.preetheme.com/html/codec/assets/img/portfolio/item2.jpg"
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- Single --> */}
//                 <div className="col-lg-4 col-md-6 mb-30 mix card1">
//                   <div className="portfolio-item">
//                     <img src={portfolio3} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           href="https://www.preetheme.com/html/codec/assets/img/portfolio/item3.jpg"
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- Single --> */}
//                 <div className="col-lg-4 col-md-6 mb-30 mix card1">
//                   <div className="portfolio-item">
//                     <img src={portfolio4} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           className="zoom"
//                           href="	https://www.preetheme.com/html/codec/assets/img/portfolio/item4.jpg"
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- Single --> */}
//                 <div className="col-lg-4 col-md-6 mb-30 mix app">
//                   <div className="portfolio-item">
//                     <img src={portfolio5} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           className="zoom"
//                           href="	https://www.preetheme.com/html/codec/assets/img/portfolio/item5.jpg
// "
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- Single --> */}
//                 <div className="col-lg-4 col-md-6 mb-30 mix web">
//                   <div className="portfolio-item">
//                     <img src={portfolio6} alt="Portfolio" />
//                     <div className="portfolio-item-overly">
//                       <div className="portfolio-item-overly-full">
//                         <a
//                           className="zoom"
//                           href="https://www.preetheme.com/html/codec/assets/img/portfolio/item6.jpg"
//                           data-fancybox="gallery"
//                         >
//                           <i className="fas fa-search-plus">
//                             <FaSearchengin />
//                           </i>
//                         </a>
//                         <a className="cursor-pointer">
//                           <i
//                             className="fas fa-link"
//                             onClick={() => {
//                               scrollToTop();
//                               Handleactive("main");
//                             }}
//                           >
//                             <BsLink45Deg />
//                           </i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* client */}
//       <section className="bg-[#312f2f]   h-[fit-content] w-[auto] relative justify-center mt-[1px] pt-[30px] client-review-area">
//         <div className="">
//           {/* <!-- Section Headding --> */}
//           <div className="section-headding text-center justify-center">
//             <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//               Our Client feedback
//             </h2>
//             <div className="title-divider"></div>
//             <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
//               Okanume Precious offers a range of services focused on simplifying
//               sales for entrepreneurs and helping them build an active buying
//               audience on social media.
//             </p>
//           </div>
//           <div className="">
//             {/* <Slick /> */}
//           </div>
//         </div>
//       </section>

//       {/* Blogs */}
//       <section
//         id="blog"
//         className="bg-[#333333]  h-[fit-content] w-[auto] relative justify-center "
//       >
//         <div className="bg-[#333333] py-[50px]">
//           <div className="section-headding text-center justify-center">
//             <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//               Our Blogs
//             </h2>
//             <div className="title-divider"></div>
//             <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-5 ">
//               Okanume Precious offers a range of services focused on simplifying
//               sales for entrepreneurs and helping them build an active buying
//               audience on social media.
//             </p>
//           </div>

//           <div className="flex gap-5 px-[55px] tabletmin:grid tabletmin:grid-cols-2 small:grid small:grid-cols-1 small:px-[15px]">
//             <div className="col-lg-4 col-md-6 mb-30">
//               <div className="blog-single">
//                 <div className="blog-thumbnail">
//                   <img src={User3} alt="blog-image" />
//                   <div className="date-box">
//                     <span>
//                       8 <br /> Feb
//                     </span>
//                   </div>
//                 </div>
//                 <div className="blog-content">
//                   <h3>
//                     <a href="#">Sapien in Purus</a>
//                   </h3>
//                   <div className="blog-meta">
//                     <a href="#">by Admin</a>
//                     <span className="sep">/</span>
//                     <a href="#">2 Comments</a>
//                     <span className="sep">/</span>
//                     <a href="#">Design</a>
//                   </div>
//                   <p>
//                     Contrary to popular belief, Lorem Ipsum is not simply random
//                     text. It has roots in a piece of classical Latin literature
//                     from 45 BC, making it over 2000 years old.
//                   </p>
//                   <a href="#" className="read-more">
//                     Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-30">
//               <div className="blog-single">
//                 <div className="blog-thumbnail">
//                   <img src={User4} alt="blog-image" />
//                   <div className="date-box">
//                     <span>
//                       8 <br /> Feb
//                     </span>
//                   </div>
//                 </div>
//                 <div className="blog-content">
//                   <h3>
//                     <a href="#">Sapien in Purus</a>
//                   </h3>
//                   <div className="blog-meta">
//                     <a href="#">by Admin</a>
//                     <span className="sep">/</span>
//                     <a href="#">2 Comments</a>
//                     <span className="sep">/</span>
//                     <a href="#">Design</a>
//                   </div>
//                   <p>
//                     Contrary to popular belief, Lorem Ipsum is not simply random
//                     text. It has roots in a piece of classical Latin literature
//                     from 45 BC, making it over 2000 years old.
//                   </p>
//                   <a href="#" className="read-more">
//                     Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 mb-30">
//               <div className="blog-single">
//                 <div className="blog-thumbnail">
//                   <img src={User5} alt="blog-image" />
//                   <div className="date-box">
//                     <span>
//                       8 <br /> Feb
//                     </span>
//                   </div>
//                 </div>
//                 <div className="blog-content">
//                   <h3>
//                     <a href="#">Social Science & Humanities</a>
//                   </h3>
//                   <div className="blog-meta">
//                     <a href="#">by Admin</a>
//                     <span className="sep">/</span>
//                     <a href="#">2 Comments</a>
//                     <span className="sep">/</span>
//                     <a href="#">Design</a>
//                   </div>
//                   <p>
//                     Contrary to popular belief, Lorem Ipsum is not simply random
//                     text. It has roots in a piece of classical Latin literature
//                     from 45 BC, making it over 2000 years old.
//                   </p>
//                   <a href="#" className="read-more">
//                     Read More <i className="fas fa-long-arrow-alt-right"><MdReadMore /></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* contact */}
//       <section className="bg-[#312f2f]  h-[fit-content] w-[auto] relative justify-center py-[20px]"  id="contact">
//         <div className="bg-[#312f2f] py-[50px]">
//           <div className="section-headding text-center justify-center">
//             <h2 className="text-[30px] font-[700] mb-[15px] tracking-[2px] text-[#cccccc]">
//               Contact Us
//             </h2>
//             <div className="title-divider"></div>
//             <p className=" text-[#ccccc2] text-[15px] leading-[20px] mb-6 tracking-[1px] max-w-[700px]  w-[600px] m-[auto] small:max-w-[500px] small:w-[auto] items-center small:px-[15px] ">
//               Okanume Precious offers a range of services focused on simplifying
//               sales for entrepreneurs and helping them build an active buying
//               audience on social media.
//             </p>
//           </div>

//           <div className="row">
// 					<div className="col-lg-8 offset-lg-2">
// 						<div className="contact-form">
// 							<form action="#"  className=" justify-center items-center  px-[250px] small:px-[20px] tabletmin:px-[50px]">
// 								<div className="  gap-4">
//                   <div className="grid grid-cols-2 justify-center gap-4 input-sub tabletmin:grid tabletmin:grid-cols-1">
                    
// 									<div className="col-lg-6">
// 										<input type="text" name="name" placeholder="Your Name"  />
// 									</div>
// 									<div className="col-lg-6">
// 										<input type="email" name="email" placeholder="Your Email"   />
// 									</div>
//                   </div>
// 									<div className="col-12">
// 										<input type="text" name="sub" placeholder="Your Subject" />
// 									</div>
// 									<div className="col-12">
// 										<textarea name="message" placeholder="Your Message"></textarea>
// 									</div>
// 									<div className="col-12">
// 										<button className="button-1" type="submit">Submit <span></span></button>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
//         </div>
//       </section>






//       {/* <!-- Start Footer Area --> */}
//       <Footer>


// 		<footer className="footer  bg-[#333333]   h-[fit-content] w-[auto] relative flex justify-between tabletmin:items-center  flex-col ">
// 			<div className="footer-top pt-[-20px] pb-[20px]">
// 				<div className="">
// 					<div className="flex flex-row   justify-center  gap-[30px] pt-20 px-[40px] tabletmin:flex-none tabletmin:grid tabletmin:grid-cols-2 tabletmin:gap-[20px] tabletmin:px-[20px] small:px-[15px]  small:grid-cols-1">
// 						<div className="col-lg-3 col-md-6">
// 							<div className="footer-widget-single">
// 								<h2>CodeC</h2>
// 								<p className="w-[300px] Laptopmin:w-[200px] tabletmin:w-[350px] small:max-w-[500px] small:w-[auto] ">Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
// 							</div>
// 						</div>
// 						<div className="col-lg-3 col-md-6 w-[300px]">
// 							<div className="footer-widget-single">
// 								<h3>Useful Links</h3>
// 								<ul>
// 									<li><a href="#home">home</a></li>
// 									<li><a href="#about">About us</a></li>
// 									<li><a href="#">Services</a></li>
// 									<li><a href="#">Terms of service</a></li>
// 									<li><a href="#">Privacy policy</a></li>
// 								</ul>
// 							</div>
// 						</div>
// 						<div className="col-lg-3 col-md-6 w-[300px]">
// 							<div className="footer-widget-single">
// 								<h3>Our Services</h3>
// 								<ul>
// 									<li><a href="#home">Photography</a></li>
// 									<li><a href="#about">Web Design</a></li>
// 									<li><a href="#">Woocommerce</a></li>
// 									<li><a href="#">Brand Image</a></li>
// 								</ul>
// 							</div>
// 						</div>
// 						<div className="col-lg-3 col-md-6 w-[300px]">
// 							<div className="footer-widget-single">
// 								<h3>Contact Us</h3>
// 								<p>
// 					              A108 Adam Street <br />
// 					              New York, NY 535022<br />
// 					              United States <br />
// 					              <strong>Phone:</strong> +1 5589 55488 55<br />
// 					              <strong>Email:</strong> info@example.com<br />
// 					            </p>
// 								<ul className="social-link">
//                 <li>
//                       <Link href="https://www.facebook.com/profile.php?id=100090268895002">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           <BiLogoFacebook />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://twitter.com/__Mmesoma__">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           {" "}
//                           <BiLogoTwitter />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://www.instagram.com/okanume_precious/">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           <BiLogoInstagram />
//                         </i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="https://www.linkedin.com/in/precious-okanume-48117226a/">
//                         <i className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#163d4d] hover:bg-[#1b7599] text-white text-base transition-all duration-300 ease-in-out">
//                           {" "}
//                           <BiLogoLinkedin />
//                         </i>
//                       </Link>
//                     </li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="footer-bottom pt-[20px] pb-[20px] text-center bg-[#312f2f] w-[100%] ">
// 				<p className="text-[#ccc] ">@ Copyright <a href="#">CodexUnicTheme</a>  | All Rights Reserved</p>
// 			</div>
// 		</footer>
//       </Footer>
// 		{/* <!-- End Footer Area --> */}
//       <div className="scroll-area block"  onClick={scrollToTop}>
//        <i className="fa fa-angle-up"><FaAngleUp /></i>
//     </div>
     
//     </div>
//     </>
//   )
// }

// export default App
