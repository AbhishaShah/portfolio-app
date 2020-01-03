import React from 'react';
import { Link } from "react-router-dom";
  

const Home = () => {
    return(
      <>
        <section className="home_banner_area">
          <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media">
                  <div className="d-flex">
                    <img src="img/personal.png" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="personal_text">
                      <h6>Hello, I am</h6>
                      <h3>Abhisha Shah</h3>
                      <h4>Full Stack Developer</h4>
                      <p>My objective is simply to be the best developer that I can be and to contribute to the technology industry all that I know and can do.</p>
                      <p>Well-organised person, self-taught learner with high attention to detail. When I'm not coding, you'll find me cooking, eating, exploring places and hanging out with friends.</p>
                      <p>   Check out my 
                      <a href="https://drive.google.com/file/d/1iBD__PBjSmObF3Erax7KME2oJpqIOqce/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary "> Resume </a>
                        here.</p>

                      <ul className="list personal_social">
                        <li><a href="mailto:abhisha5993@gmail.com"><i className="fa fa-envelope" /></a></li>
                        <li><a href="https://www.linkedin.com/in/abhisha-shah/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/AbhishaShah" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </section>
        <section className="feature_area p_20">
              <div className="container">
                <div className="main_title">
                  <h2>Skills Overview</h2>
                  <p>I have 3.5 years' experience building web applications. Here is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and <Link to="work">project portfolio</Link>.</p>
                </div>
                <div className="feature_inner row">
                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                    <div className="skill-icon"><i className="lnr lnr-code" /></div>
                      <h4>Frontend</h4>
                      <ul className="skills-list">
                        <li>Semantic HTML</li>
                        <li>CSS/SASS/LESS</li>
                        <li>React</li>
                        <li>Javascript/ES6</li>
                        <li>Bootstrap</li>
                        </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                      <div className="skill-icon"><i className="lnr lnr-database" /></div>
                      <h4>Backend</h4>
                      <ul className="skills-list">
                        <li>PHP</li>
                        <li>Node JS</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Rest APIs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                       <div className="skill-icon"><i className="lnr lnr-layers" /></div>
                      <h4>Others</h4>
                      <ul className="skills-list">
                        <li>Git/Github</li>
                        <li>Unit Testing</li>
                        <li>Heroku/BeansTalk</li>
                        <li>Express</li>
                        <li>Web Debug Tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>  

          <section className="mytabs_area p_120">
          <div className="container">
            <div className="tabs_inner">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <ul className="list">
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex  ">
                          <p>2019 to present</p>
                        </div>
                        <div className="media-body">
                          <h4>Web Developer</h4>
                          <p>OCANDS, University of Toronto</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media ">
                        <div className="d-flex">
                          <p>2018 to 2019  &nbsp;&nbsp;</p>
                        </div>
                        <div className="media-body ">
                          <h4>Software Developer</h4>
                          <p>IMS Incorporated, North York</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media ">
                        <div className="d-flex">
                          <p>2015 to 2017 &nbsp; &nbsp;</p>
                        </div>
                        <div className="media-body">
                          <h4>Software Developer</h4>
                          <p>BiztechCS</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media ">
                        <div className="d-flex">
                          <p>2014 to 2014 &nbsp; &nbsp;</p>
                        </div>
                        <div className="media-body">
                          <h4>Web Intern</h4>
                          <p>X-mx Solutions</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <ul className="list">
                    <li>
                      <span />
                      <div className="media ">
                        <div className="d-flex">
                          <p>2013 to 2015</p>
                        </div>
                        <div className="media-body">
                          <h4>Master of Science </h4>
                          <p>Information Technology and Computer Application</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex ">
                          <p>2010 to 2013</p>
                        </div>
                        <div className="media-body">
                          <h4>Bachelor of Science </h4>
                          <p>Information Technology and Computer Application</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="welcome_area p_120 " >
              <div className="container">
                <div className="row welcome_inner">
                  <div className="col-lg-12">
                    <div className="welcome_text">
                      <h4 className="text-center">Recent Certifications</h4>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="wel_item">
                            <h5> Agile Development Practices</h5>
                            <p>
                              <a href="http://www.linkedin.com/learning/agile-development-practices" target="_blank" rel="noopener noreferrer">View</a>
                          </p>
                          <h5>Agile Software Development</h5>
                            <p>
                              <a href="http://www.linkedin.com/learning/agile-software-development" target="_blank" rel="noopener noreferrer">View</a>
                          </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="wel_item">
                            <h5>React: Creating and Hosting a Full-Stack Site</h5>
                            <p>
                              <a href="http://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site" target="_blank" rel="noopener noreferrer">View</a>
                          </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="wel_item">
                            <h5>Node.js Essential Training</h5>
                            <p>
                              <a href="http://www.linkedin.com/learning/node-js-essential-training-2" target="_blank" rel="noopener noreferrer">View</a>
                          </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

    </>
        
    )
}

export default Home;