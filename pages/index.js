import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Main, Section, Contact, TopButton } from '../components/styled';

export default function Home() {
  const [shouldShowTopButton, setShouldShowTopButton] = useState(false);
  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShouldShowTopButton(true);
      } else {
        setShouldShowTopButton(false);
      }
    }
    window.onscroll = function() { scrollFunction() };
  }, []);

  const handleTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>
      <Head>
        <title>John Park.</title>
        <link rel="icon" href="https://img.icons8.com/color/30/000000/paper.png" />
      </Head>

      <Main>
        <h1 id="title">Yongjun Park,</h1>
        <h2>a Software Engineer.</h2>

        <Section>
          <h3>Summary</h3>
          <div className="item">
            <div className="header">
              <h4>Who am I?</h4>
            </div>
            <div className="description">
              <p>I am a Full-Stack Engineer, with {new Date().getFullYear() - 2018} years of full time experience.</p>
              <p>I currently work at <a target="_blank" href="https://www.zillow.com">Zillow Group</a>, the largest real-estate tech company in the U.S., where I daily write and maintain code for web apps intended to help users interested in rentals.</p>
              <p>Most of my current work is focused on the front-end UI; however, I often work on middle layers, routers and backend services as well.</p>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <h4>Technology Experience</h4>
            </div>
            <div className="subheader">
              <h5>I have experience in:</h5>
            </div>
            <div className="description">
              <p>React.js; Next.js; Redux (w/ Immer.js &amp; Redux-Saga); CSS-in-JS (emotion, styled-components); Node.js; Apollo GraphQL; Webpack; Babel; Lerna; Cypress; Jest; Puppeteer; MS SQL; MySQL; AWS; Google Analytics; Docker; Kubernetes; and more.</p>
            </div>
            <div className="subheader">
              <h5>I can talk about:</h5>
            </div>
            <div className="description">
              <p>Isomorphic Web Apps; Server-Side Rendering; CICD Pipelines; Monorepo Structure; Automated E2E/Integration testing; Agile Methodology; Accessibility; and more.</p>
            </div>
            <div className="subheader">
              <h5>I daily worked with:</h5>
            </div>
            <div className="description">
              <p>InVision; Figma; Jira; Bitbucket; Gitlab; Slack; and more.</p>
            </div>
          </div>
        </Section>

        <Section>
          <h3>Education</h3>
          <div className="header">
            <h4>University of Washington</h4>
            <span>Seattle, WA</span>
          </div>
          <div className="subheader">
            <h5>B.S. in Informatics</h5>
            <span>Class of 2017</span>
          </div>
          <div className="description">
            <p>A program with focus on computer systems from a user-centered perspective and studies the structure, behavior and interactions of natural and artificial systems that store, process and communicate information.</p>
          </div>
        </Section>

        <Section>
          <h3>Work Experience</h3>
          <div className="item">
            <div className="header">
              <h4>Zillow Group</h4>
              <span>Seattle, WA</span>
            </div>
            <div className="subheader">
              <h5>Software Engineer III</h5>
              <span>Feb 2020 - Present</span>
            </div>
            <div className="subheader">
              <h5>Software Engineer II</h5>
              <span>Jan 2019 - Jan 2019</span>
            </div>
            <h6>Vertical Living Team - Rentals Division</h6>
            <ul className="description">
              <li>
                Products:
                <ol>
                  <li>
                    <a href="#bdp">Building Details Page </a>
                  </li>
                  <li>
                    <a href="#renter-hub">Renter Hub</a>
                  </li>
                </ol>
              </li>
              <li>
                Built and maintained features across the full stack of a web application that displays rich media (photo, video, 3d tours) and useful information for renting out or leasing homes.
              </li>
              <li>
                Created shareable UI modules and optimized their performance for an isomorphic frontend application as part of an effort to rebrand the entire Zillow.com website.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="header">
              <h4>Visa Inc.</h4>
              <span>Bellevue, WA</span>
            </div>
            <div className="subheader">
              <h5>Software Engineer</h5>
              <span>Feb 2018 - Dec 2018</span>
            </div>
            <div className="subheader">
              <h5>Software Engineer Intern</h5>
              <span> June 2017 - Sep 2017</span>
            </div>
            <h6>Enterprise Partners Team</h6>
            <ul className="description">
              <li>
                Products:
                <ol>
                  <li>
                    <a href="#ebc">Enterprise Business Client (EBC)</a>
                  </li>
                  <li>
                    <a href="#mintpint">Merchant Interface (MINT) &amp; Partner Interface (PINT)</a>
                  </li>
                </ol>
              </li>
              <li>Worked on payment gateway solutions for clients of varying sizes to help them with growth, protection, and scalability.</li>
              <li>Clients include but are not limited to: Google, Facebook, LVMH, Kroger's, and Supreme New York.</li>
              <li>
                Implemented complex reusable user interfaces in an effort to merge features on three platforms (EBC, PINT, and MINT) into a single product.
              </li>
              <li>
                Trained peers on front-end application architecture as a subject matter expert.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="header">
              <h4>Samsung Electronics America</h4>
              <span>Ridgefield Park, NJ</span>
            </div>
            <div className="subheader">
              <h5>Web Developer Intern</h5>
              <span>June 2016 - Aug 2016</span>
            </div>
            <div className="description">
              <ul>
                <li>Designed and built a project management application to provide a user-friendly environment to replace the outdated business processes.</li>
                <li>Implemented a dashboard interface to monitor and analyze data generated from projects and clients.</li>
                <li>Technologies used: Angular 2 w/ TypeScript, Java EE, and Wildfly.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <h3>Projects</h3>

          <div id="renter-hub" className="item">
            <div className="header">
              <h4>Renter Hub</h4>
              <span>May 2020 - Present</span>
            </div>
            <div className="subheader">
              <h5>Vertical Living (Zillow Group Team)</h5>
            </div>
            <ul className="description">
              <li>Web application to help users contact landlords, tour properties, apply for a lease, and make payments for rental homes.</li>
              <li>Initiative to become a catalyst for a fast-growing rentals division, which increased revenue by +50% YoY.</li>
              <li>
                Technologies used: Next.js, TypeScript, React.js, Redux, CSS-in-JS, Node.js, Java Spring MVC, Jest, Gitlab CI/CD, and MS SQL.
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="header">
              <h4>Mo'im</h4>
              <span>Dec 2019 - Present</span>
            </div>
            <div className="subheader">
              <h5>Personal Project</h5>
            </div>
            <ul className="description">
              <li>
                Mobile based social network to find, create, join, or subscribe to events around town that is happening today.
              </li>
              <li>
                Technologies used: Next.js, React-Native, AWS.
              </li>
            </ul>
          </div>

          <div id="bdp" className="item">
            <div className="header">
              <h4>Building Details Page</h4>
              <span>Jan 2019 - Present</span>
            </div>
            <div className="subheader">
              <h5>Vertical Living (Zillow Group Team)</h5>
            </div>
            <ul className="description">
              <li><a target="_blank" href="https://www.zillow.com/b/the-perry-seattle-wa-65bShF/">Link</a></li>
              <li>Isomorphic web app that serve media content and information regarding condo and apartment buildings.</li>
              <li>Re-wrote and is mainting every module on page as part of a rebranding effort, contributing to increased site traffic of +32% YoY.</li>
              <li>Built out gitlab templates to automate package updates and wrote build-time tests to increase developer efficiency.</li>
              <li>Technologies used: Next.js, Styled-Components, Jest, Cypress, Gitlab CI/CD, Apollo GraphQL, Java Spring MVC.</li>
            </ul>
          </div>

          <div id="ebc" className="item">
            <div className="header">
              <h4>Enterprise Business Center</h4>
              <span>Feb 2018 - Dec 2018</span>
            </div>
            <div className="subheader">
              <h5>CyberSource (Visa Inc. Team)</h5>
            </div>
            <div className="description">
              <ul>
                <li><a target="_blank" href="https://businesscenter.cybersource.com/ebc2/">Link</a></li>
                <li>A Visa-branded payment gateway solutions for the largest enterprise clients.</li>
                <li>
                  Developed new features such as transaction dashboards, virtual POS, and fraud management for Visa's largest payment gateway clients.
                </li>
                <li>
                  Worked with POS hardware to integrate payment acceptance via USB and bluetooth.
                </li>
                <li>
                  Technologies used: React, Styled-Components, Groovy on Grails, Java Spring MVC, and more.
                </li>
              </ul>
            </div>
          </div>

          <div id="mintpint" className="item">
            <div className="header">
              <h4>Merchant &amp; Partner Interface</h4>
              <span>June 2017 - Aug 2017</span>
            </div>
            <div className="subheader">
              <h5>Authorize.net (Visa Inc. Team)</h5>
            </div>
            <div className="description">
              <ul>
                <li><a target="_blank" href="https://login.authorize.net/">Link</a></li>
                <li>A Visa-branded payment gateway solution focusing on small to medium size businesses.</li>
                <li>
                  Migrated the AngularJs version of the application into a new React application.
                </li>
                <li>
                  Built features such as main dashboard and authentication.
                </li>
                <li>
                  Technologies used: React, Redux, C#, and ASP.Net Core.
                </li>
              </ul>
            </div>
          </div>
        </Section>
        
        <Contact>
          <h3>Want to contact Me?</h3>
          <ul>
            <li>
              <img src="https://img.icons8.com/material-sharp/24/000000/email.png"/>
              <a href="mailto:yongjp94@gmail.com">yongjp94@gmail.com</a>
            </li>
            <li>
              <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/>
              <a target="_blank" href="https://www.instagram.com/ngtyj____">@ngtyj____</a>
            </li>
            <li>
              <img src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png"/>
              <a target="_blank" href="https://www.linkedin.com/in/yongjp94">Yongjun Park's LinkedIn</a>
            </li>
          </ul>
        </Contact>
      </Main>
      <TopButton hidden={!shouldShowTopButton} onClick={handleTop}>
        <img src="/up-arrow.svg" />
      </TopButton>
    </div>
  )
}
