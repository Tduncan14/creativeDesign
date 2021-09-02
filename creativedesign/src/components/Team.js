import React from 'react';
import image1 from '../images/team-member-1.jpg'
import image2 from '../images/team-member-2.jpg'
import image3 from '../images/team-member-3.jpg'



const Team = () => {



   

   return(
       <section className="section-3">
           <h1 className="section-heading">Team</h1>
           <div className="team-wrapper">
               <div className="team-member">
              <img src={image1} className="team-member-img"/>
              <h2 className="team-member-name">Nick
              <span>(Designer)</span></h2>
              <ul className="team-member-skills">
                  <li>Ps</li>
                  <li>Figma</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>AI</li>
              </ul>

              <a href="#" className="projects-btn">
                  Projects
              </a>
              <div className="story-btn" title="My Story">
                  <div className="story-btn-line"></div>
              </div>
             <div className="story">
                 <h4 className="story-heading">About Me</h4>
                  <p className="story-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a auctor tortor. Sed lacinia venenatis odio, eu venenatis est. Nam dictum vulputate maximus. Nunc ac eleifend nibh. Integer congue non felis quis pretium. Morbi porttitor, augue id ornare iaculis, sapien.</p>
             </div>
             </div>

             <div className="team-member">
              <img src={image2} className="team-member-img"/>
              <h2 className="team-member-name">Brown
              <span>(Designer)</span></h2>
              <ul className="team-member-skills">
                  <li>Ae</li>
                  <li>Pr</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Inkscape</li>
              </ul>

              <a href="#" className="projects-btn">
                  Projects
              </a>
              <div className="story-btn" title="My Story">
                  <div className="story-btn-line"></div>
              </div>
             <div className="story">
                 <h4 className="story-heading">About Me</h4>
                  <p className="story-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a auctor tortor. Sed lacinia venenatis odio, eu venenatis est. Nam dictum vulputate maximus. Nunc ac eleifend nibh. Integer congue non felis quis pretium. Morbi porttitor, augue id ornare iaculis, sapien.</p>
             </div>
             </div>


             <div className="team-member">
              <img src={image3} className="team-member-img"/>
              <h2 className="team-member-name">John Doe
              <span>(Developer)</span></h2>
              <ul className="team-member-skills">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                  <li>Python</li>
              </ul>

              <a href="#" className="projects-btn">
                  Projects
              </a>
              <div className=" story-btn" title="My Story">
                  <div className="change story-btn-line"></div>
              </div>
             <div className="story">
                 <h4 className="story-heading">About Me</h4>
                  <p className="story-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a auctor tortor. Sed lacinia venenatis odio, eu venenatis est. Nam dictum vulputate maximus. Nunc ac eleifend nibh. Integer congue non felis quis pretium. Morbi porttitor, augue id ornare iaculis, sapien.</p>
             </div>
             </div>


           </div>
       </section>
   )




}




export default Team 



