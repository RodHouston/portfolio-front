import React,{ useEffect, useState }  from 'react'
import Flip from 'react-reveal/Flip';

import Roll from 'react-reveal/Roll';
import Nav from '../components/Nav';

import { useNavigate } from "react-router-dom";

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript,
  IoLogoNodejs, IoLogoPython,IoLogoGoogle } from 'react-icons/io';
import {SiJquery, SiReact, SiMongodb, SiJava, SiAndroidstudio, SiWindows,
  SiAtom, SiAdobe, SiDjango, SiVisualstudiocode, SiPostgresql, SiMacos,
  } from 'react-icons/si';
import {FaGitAlt, FaGithub} from 'react-icons/fa';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'


import VideoPlayer from 'react-video-js-player';





const Home =() => {

   let navigate = useNavigate();


   const [scrollPosition, setScrollPosition] = useState(0);
     const handleScroll = () => {
       const position = window.pageYOffset;
       setScrollPosition(position);
     };

     useEffect(() => {
       window.addEventListener("scroll", handleScroll);

       return () => {
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);

console.log(scrollPosition);

return(
  <>
<Nav />
  <div className="mainContainer" style={{backgroundImage: `url('./topBg.jpeg')`}}>
    <div className= 'mainDivEffect'>
      <div className="parallaxContainer " >
        <div className='sec section1'>
          <Flip left cascade >
          <p className='mainName'> Roderick Houston</p>
          </Flip>
        </div>
      </div>
      <Flip right cascade>
        <p className='nameTitle'> | Software Engineer |  </p>
      </Flip>
      <div className="contentContainer">
        <div className='sect section2'>
          <div className='divShape2Top'>
          </div>
          <div className='contentSect2 mobileColumn'>
            <div className='leftSect2 '>
              <h1>About</h1>
              <h1>Who is Roderick?</h1>
              <div className='profilePicDiv'>
                <div className='profilePicIn'>
                  <div className='profilePicFront'>
                    <img className='proPic' src='https://i.imgur.com/O9S4EIu.png' alt="Girl in a jacket"/>
                  </div>
                  <div className='profilePicBack'>
                    <img className='proPic2' src='../../me6.jpeg' alt="Girl in a jacket"/>
                  </div>
                </div>
              </div>
              <div className='bio'>
                <h4>ABOUT:</h4>
                  <p>Roderick Houston is a current student in General Assembly's
                  Software Engineering Immersive program. Through this program,
                  he is further developing his techniques for web development with
                  CSS, HTML, and JavaScript. Additionally, Roderick is learning DOM
                  manipulation through JQuery.</p><br/>
                <h4>WHERE HE CAME FROM:</h4>
                  <p>Roderick is a native of Oklahoma City, Oklahoma and in 2002,
                  raduated high school from Tipton High. In 2006, Roderick married
                  his wife Shawna prior to her joining the United States Air Force
                  and together, they began their journey around the world. Roderick
                  and Shawna have two children, Cameron and Aaliyah. Roderick is a
                  college graduate with a Bachelor's degree in Computer Science Software
                  Engineering.</p><br/>
                <h4>WHERE HE IS NOW:</h4>
                  <p>Being a military spouse requires constantmovement to different locations, both overseas and across the
                  United States. Roderick has had the opportunity to experience cultures
                  in Italy and Guam, as well as live in Florida, a short return to Oklahoma
                  and now resides in northern Virginia. While these experiences are rare for
                  most, this constant state of movement has required Roderick to take on
                  many careers. After much thought and research, he decided to pursue a
                  career as a software engineer, for more stability with its opportunities
                  for remote work.</p><br/>
                <h4>WHERE HE IS HEADED:</h4>
                  <p>Roderick truly enjoys a challenge and the complexity that comes with
                  coding. His creativity is beyond reproach and would be an asset on any
                  development team. Roderick’s plan is to work his way through the industry,
                  gaining experience in developing web and mobile applications. His
                  ultimate goal is to do software development with the automotive industry
                  such as mobile device connectivity and digital vehicle interfaces.</p>
                </div>
              </div>
            </div>
          <div className='divShape2Bottom'>
          </div>
        </div>
        <div className='sect section3' onClick={(e) => handleScroll()}>
          <div className='divShape3Top'>
          </div>
            <div className='div3Content'>
              <div className='div3ContentDiv'>
                MY TOOL BOX
                <h1> TECHNICAL SKILLS & TOOLS</h1 >
                Languages, Tools, and IDEs used to create requested products
                <div className='logosDiv'>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <IoLogoHtml5 className='techLogos'/>
                        HTML
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <IoLogoCss3 className='techLogos'/>
                        CSS
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <IoLogoJavascript className='techLogos'/>
                        JAVASCRIPT
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiJquery className='techLogos'/>
                        JQUERY
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <IoLogoPython className='techLogos'/>
                        PYTHON
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiDjango className='techLogos'/>
                        DJANGO
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <SiPostgresql className='techLogos'/>
                        POSTGRES SQL
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiJava className='techLogos'/>
                        JAVA
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <IoLogoNodejs className='techLogos'/>
                        NODEJS
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiMongodb className='techLogos'/>
                        MONGODB
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <SiReact className='techLogos'/>
                        REACT APPS
                      </Roll>
                      </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiAtom className='techLogos'/>
                        ATOM
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <SiWindows className='techLogos'/>
                        WINDOWS
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiMacos className='techLogos'/>
                        Mac
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <SiAndroidstudio className='techLogos'/>
                        ANDROID STUDIO
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiVisualstudiocode className='techLogos'/>
                        VISUAL STUDIO
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <FaGitAlt className='techLogos'/>
                        GIT
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <FaGithub className='techLogos'/>
                        GITHUB
                      </Roll>
                    </div>
                  </div>
                  <div className='logoSet'>
                    <div className='logoPair'>
                      <Roll left>
                        <IoLogoGoogle className='techLogos'/>
                        GOOGLE
                      </Roll>
                    </div>
                    <div className='logoPair'>
                      <Roll right>
                        <SiAdobe className='techLogos'/>
                        ADOBE
                      </Roll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='divShape3BottomDiv'>
              <div className='divShape3Bottom'>
                <div className='divShape3Bottomtwo'>
                </div>
              </div>
            </div>
          </div>
          <div className='sect section4'>
            <div className='divShape4Top'>
            </div>
              <h1> Projects</h1>
              <div className='pcMobileSet'>
              <div className='pcMobilePairStrip'>
              </div>
              <div className="appTitle" >
                <h1> Dragonball Character Library </h1>
                <button className='btn3' >Visit Website</button>
              </div>
                <div className='pcMobilePair'>
                    <img className='pcMock' src='./dbzPc.png' alt="Girl in a jacket"/>
                </div>
              </div>


              <div className='pcMobileSet'>
              <div className='pcMobilePairStrip'>
              </div>
                <div className='pcMobilePair'>
                    <img className='pcMock' src='./marvelPc.png' alt="Girl in a jacket"/>
                </div>
                <div className="appTitle" >
                  <h1> Marvel Character Library </h1>

                  <button className='btn3' onClick={(e) => navigate('/marvel')}>Visit Website</button>

                </div>
              </div>

              <div className='pcMobileSet'>
              <div className='pcMobilePairStrip'>
              </div>
              <div className="appTitle" >
                <h1>Cyclepath Social App </h1>
                <form>
                  <button className='btn3' formAction='https://hidden-brook-22857.herokuapp.com/profile/Test/Test?UserName=Test&password=test' rel="noopener noreferrer">Visit Website</button>
                </form>

              </div>
                <div className='pcMobilePair'>

                    <img className='pcMock' src='./cpPc.png'  alt="Girl in a jacket"/>
                </div>

              </div>


              <div className='pcMobileSet'>
              <div className='pcMobilePairStrip'>
              </div>
                <div className='pcMobilePair'>

                    <img className='pcMock' src='./gameDocPc.png' alt="Girl in a jacket"/>
                </div>
                <div className="appTitle" >
                  <h1> Game Document Design </h1>
                  <form>
                    <button className='btn3' formAction='https://www.gamedocs.app/user/RodH' rel="noopener noreferrer">Visit Website</button>
                  </form>
                </div>
              </div>


              <div className='lapTopImag'>
                <VideoPlayer
                className='lapTopVid'
                  // controls={true}
                  src={"/marvelDemo.mov"}
                  autoplay={true}
                  width="290"
                  height="175"
                />
              </div>
              <div className='divShape3BottomDiv'>
                <div className='divShape3Bottom'>
                  <div className='divShape3Bottomtwo'>
                  </div>
                </div>
                </div>
          </div>



          <div className=' section5'>
            <div className='divShape4Top'>
            </div>


            <h1> Contact Me</h1>

            <form className='contactForm' formAction="mailto:Rod.Houston85@google.com"
              method="POST"
              encType="multipart/form-data"
                  name="EmailForm">

              Name:<br/>
              <input className='input3' type="text" size="19" name="Contact-Name"/><br/><br/>
              Email:<br/>
              <input className='input3' type="email" name="Contact-Email"/><br/><br/>
              Message:<br/>
              <textarea className='input3' name="Contact-Message" rows="6" cols="20">
              </textarea><br/><br/>
              <button className='btn3'type="submit" value="Submit">Send</button>
            </form>
            <div className='socialLinkDivHead'>
              <FaFacebookSquare className='icons'/>
              <FaTwitterSquare className='icons'/>
              <FaInstagramSquare className='icons'/>

              <FaLinkedin className='icons'/>
              <FaGithubSquare className='icons'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
