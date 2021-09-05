import React  ,{useState} from 'react';
import image1 from '../images/team-member-1.jpg'
import image2 from '../images/team-member-2.jpg'
import image3 from '../images/team-member-3.jpg'



const Team = () => {


      const [change,setToggleChange] = useState(false);
      const [change2,setToggleChange2] = useState(false);
      const [change3,setToggleChange3] = useState(false);

   

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
              <div className={change ? "story-btn change ": 'story-btn'} title="My Story">
                  <button onClick={() => setToggleChange(!change)} className="story-btn-line"></button>
              </div>
             <div className={change ? 'story change' : 'story'}>
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
              <div className={change2 ? "story-btn change ": 'story-btn'} title="My Story">
                  <button  onClick={() => setToggleChange2(!change2)} className="story-btn-line"></button>
              </div>
             <div className={change2  ? 'change story' : 'story'}>
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
              <div className={change3 ? "story-btn change ": 'story-btn'} title="My Story">
                  <button  onClick={() => setToggleChange3(!change3) }className="story-btn-line"></button>
              </div>
             <div className={change3 ? 'story change':'story'}>
                 <h4 className="story-heading">About Me</h4>
                  <p className="story-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a auctor tortor. Sed lacinia venenatis odio, eu venenatis est. Nam dictum vulputate maximus. Nunc ac eleifend nibh. Integer congue non felis quis pretium. Morbi porttitor, augue id ornare iaculis, sapien.</p>
             </div>
             </div>


           </div>
       </section>
   )




}




export default Team 



